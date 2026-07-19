import fs from "node:fs"
import path from "node:path"

const THREADS_API = "https://graph.threads.net"

const TOKEN_PATH =
  process.env.THREADS_TOKEN_PATH ??
  path.join(process.env.THREADS_DATA_DIR ?? "./data", "threads-token.json")

const REFRESH_IF_OLDER_THAN_MS = Number(
  process.env.THREADS_REFRESH_INTERVAL_MS ?? 7 * 24 * 60 * 60 * 1000,
)

function getAppConfig() {
  const clientId = process.env.THREADS_APP_ID
  const clientSecret = process.env.THREADS_APP_SECRET
  const redirectUri = process.env.THREADS_REDIRECT_URI

  if (!clientId || !clientSecret || !redirectUri) {
    return null
  }

  return { clientId, clientSecret, redirectUri }
}

function ensureTokenDir() {
  const dir = path.dirname(TOKEN_PATH)
  fs.mkdirSync(dir, { recursive: true })
}

export function readTokenStore() {
  try {
    const raw = fs.readFileSync(TOKEN_PATH, "utf8")
    return JSON.parse(raw)
  } catch {
    return null
  }
}

function writeTokenStore(store) {
  ensureTokenDir()
  fs.writeFileSync(TOKEN_PATH, JSON.stringify(store, null, 2))
}

export function bootstrapTokenFromEnv() {
  const envToken = process.env.THREADS_ACCESS_TOKEN
  if (!envToken || readTokenStore()?.accessToken) {
    return
  }

  const expiresIn = Number(process.env.THREADS_ACCESS_TOKEN_EXPIRES_IN ?? 60 * 24 * 60 * 60)
  const now = Date.now()

  writeTokenStore({
    accessToken: envToken,
    userId: process.env.THREADS_USER_ID ?? null,
    expiresAt: now + expiresIn * 1000,
    updatedAt: now,
  })
}

async function exchangeForLongLivedToken(shortLivedToken) {
  const config = getAppConfig()
  if (!config) {
    throw new Error("Threads app credentials are not configured")
  }

  const params = new URLSearchParams({
    grant_type: "th_exchange_token",
    client_secret: config.clientSecret,
    access_token: shortLivedToken,
  })

  const response = await fetch(`${THREADS_API}/access_token?${params}`)
  const data = await response.json()

  if (!response.ok) {
    throw new Error(`Long-lived token exchange failed: ${JSON.stringify(data)}`)
  }

  return data
}

async function refreshLongLivedToken(longLivedToken) {
  const params = new URLSearchParams({
    grant_type: "th_refresh_token",
    access_token: longLivedToken,
  })

  const response = await fetch(`${THREADS_API}/refresh_access_token?${params}`)
  const data = await response.json()

  if (!response.ok) {
    throw new Error(`Token refresh failed: ${JSON.stringify(data)}`)
  }

  return data
}

function storeTokenResponse(data, previous = {}) {
  const now = Date.now()
  const expiresIn = Number(data.expires_in ?? 60 * 24 * 60 * 60)

  const store = {
    accessToken: data.access_token,
    userId: data.user_id ?? previous.userId ?? null,
    expiresAt: now + expiresIn * 1000,
    updatedAt: now,
  }

  writeTokenStore(store)
  return store
}

export async function refreshTokenIfNeeded(store) {
  if (!store?.accessToken) {
    return null
  }

  const now = Date.now()
  const shouldRefresh =
    now - store.updatedAt >= REFRESH_IF_OLDER_THAN_MS || now >= store.expiresAt - 14 * 24 * 60 * 60 * 1000

  if (!shouldRefresh) {
    return store.accessToken
  }

  if (now >= store.expiresAt) {
    throw new Error("Threads token expired — reconnect at /api/threads/oauth/start")
  }

  const refreshed = await refreshLongLivedToken(store.accessToken)
  const next = storeTokenResponse(refreshed, store)
  return next.accessToken
}

export async function ensureValidToken() {
  bootstrapTokenFromEnv()

  const store = readTokenStore()
  if (!store?.accessToken) {
    return null
  }

  try {
    return await refreshTokenIfNeeded(store)
  } catch (error) {
    console.error("Threads token refresh error:", error)
    return store.accessToken
  }
}

export function getOAuthStartUrl(state) {
  const config = getAppConfig()
  if (!config) {
    throw new Error("Threads app credentials are not configured")
  }

  const params = new URLSearchParams({
    client_id: config.clientId,
    redirect_uri: config.redirectUri,
    scope: "threads_basic",
    response_type: "code",
    state,
  })

  return `https://threads.net/oauth/authorize?${params}`
}

export async function exchangeAuthorizationCode(code) {
  const config = getAppConfig()
  if (!config) {
    throw new Error("Threads app credentials are not configured")
  }

  const body = new URLSearchParams({
    client_id: config.clientId,
    client_secret: config.clientSecret,
    grant_type: "authorization_code",
    redirect_uri: config.redirectUri,
    code,
  })

  const response = await fetch(`${THREADS_API}/oauth/access_token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  })

  const shortLived = await response.json()
  if (!response.ok) {
    throw new Error(`Authorization code exchange failed: ${JSON.stringify(shortLived)}`)
  }

  const longLived = await exchangeForLongLivedToken(shortLived.access_token)
  return storeTokenResponse({
    ...longLived,
    user_id: shortLived.user_id,
  })
}

export function isThreadsConfigured() {
  return Boolean(getAppConfig() || process.env.THREADS_ACCESS_TOKEN || readTokenStore()?.accessToken)
}
