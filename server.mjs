import fs from "node:fs"
import http from "node:http"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { randomBytes } from "node:crypto"
import { fetchThreadsPosts } from "./lib/threads-api.mjs"
import {
  bootstrapTokenFromEnv,
  ensureValidToken,
  exchangeAuthorizationCode,
  getOAuthStartUrl,
  isThreadsConfigured,
  readTokenStore,
} from "./lib/threads-token.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST_DIR = path.join(__dirname, "dist")
const PORT = Number(process.env.PORT ?? 3000)
const CACHE_TTL_MS = Number(process.env.THREADS_CACHE_TTL_MS ?? 5 * 60 * 1000)
const POST_LIMIT = Number(process.env.THREADS_POST_LIMIT ?? 5)

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
}

const oauthStates = new Map()
let feedCache = { posts: [], expiresAt: 0 }

function json(res, statusCode, body) {
  const payload = JSON.stringify(body)
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  })
  res.end(payload)
}

function redirect(res, location) {
  res.writeHead(302, { Location: location })
  res.end()
}

function serveStatic(req, res) {
  const url = new URL(req.url ?? "/", `http://${req.headers.host}`)
  const pathname = decodeURIComponent(url.pathname)
  const safePath = path.normalize(pathname).replace(/^(\.\.[/\\])+/, "")
  let filePath = path.join(DIST_DIR, safePath)

  if (pathname.endsWith("/")) {
    filePath = path.join(filePath, "index.html")
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath)
    res.writeHead(200, { "Content-Type": MIME_TYPES[ext] ?? "application/octet-stream" })
    fs.createReadStream(filePath).pipe(res)
    return
  }

  const indexPath = path.join(DIST_DIR, "index.html")
  if (fs.existsSync(indexPath)) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
    fs.createReadStream(indexPath).pipe(res)
    return
  }

  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" })
  res.end("Not found")
}

async function handleThreadsFeed(res, url) {
  const limit = Math.min(Number(url.searchParams.get("limit")) || POST_LIMIT, 25)

  if (feedCache.posts.length > 0 && Date.now() < feedCache.expiresAt) {
    json(res, 200, { posts: feedCache.posts, cached: true })
    return
  }

  const token = await ensureValidToken()
  if (!token) {
    json(res, 200, {
      posts: [],
      connected: false,
      connectUrl: isThreadsConfigured() ? "/api/threads/oauth/start" : null,
    })
    return
  }

  try {
    const { posts } = await fetchThreadsPosts(token, { limit })
    feedCache = { posts, expiresAt: Date.now() + CACHE_TTL_MS }
    json(res, 200, { posts, connected: true, cached: false })
  } catch (error) {
    console.error("Threads feed error:", error)
    json(res, 200, {
      posts: [],
      connected: Boolean(readTokenStore()?.accessToken),
      error: "Failed to load Threads posts",
    })
  }
}

function handleOAuthStart(res) {
  const state = randomBytes(16).toString("hex")
  oauthStates.set(state, Date.now())

  for (const [key, createdAt] of oauthStates) {
    if (Date.now() - createdAt > 10 * 60 * 1000) {
      oauthStates.delete(key)
    }
  }

  redirect(res, getOAuthStartUrl(state))
}

async function handleOAuthCallback(res, url) {
  const error = url.searchParams.get("error")
  if (error) {
    redirect(res, `/?threads=error&reason=${encodeURIComponent(error)}`)
    return
  }

  const code = url.searchParams.get("code")
  const state = url.searchParams.get("state")

  if (!code || !state || !oauthStates.has(state)) {
    redirect(res, "/?threads=error&reason=invalid_state")
    return
  }

  oauthStates.delete(state)

  try {
    await exchangeAuthorizationCode(code)
    feedCache = { posts: [], expiresAt: 0 }
    redirect(res, "/?threads=connected")
  } catch (callbackError) {
    console.error("Threads OAuth callback error:", callbackError)
    redirect(res, "/?threads=error&reason=exchange_failed")
  }
}

async function handleRequest(req, res) {
  const url = new URL(req.url ?? "/", `http://${req.headers.host}`)

  if (req.method === "GET" && url.pathname === "/api/threads-feed") {
    await handleThreadsFeed(res, url)
    return
  }

  if (req.method === "GET" && url.pathname === "/api/threads/oauth/start") {
    try {
      handleOAuthStart(res)
    } catch (error) {
      json(res, 500, { error: error instanceof Error ? error.message : "OAuth not configured" })
    }
    return
  }

  if (req.method === "GET" && url.pathname === "/api/threads/oauth/callback") {
    await handleOAuthCallback(res, url)
    return
  }

  if (req.method === "GET" && url.pathname === "/api/health") {
    json(res, 200, { ok: true })
    return
  }

  if (req.method === "GET") {
    serveStatic(req, res)
    return
  }

  res.writeHead(405, { "Content-Type": "text/plain; charset=utf-8" })
  res.end("Method not allowed")
}

bootstrapTokenFromEnv()

const server = http.createServer((req, res) => {
  handleRequest(req, res).catch((error) => {
    console.error("Request error:", error)
    json(res, 500, { error: "Internal server error" })
  })
})

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on http://0.0.0.0:${PORT}`)
})
