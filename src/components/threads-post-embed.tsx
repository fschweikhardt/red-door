import { useEffect, useRef, useState } from "react"
import { threadsOEmbedUrl } from "@/lib/threads"

type ThreadsOEmbedResponse = {
  html?: string
}

const EMBED_SCRIPT_SRC = "https://www.threads.com/embed.js"

function stripScriptTags(html: string) {
  return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
}

function loadEmbedScript() {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector(`script[src="${EMBED_SCRIPT_SRC}"]`)
    if (existing) {
      resolve()
      return
    }

    const script = document.createElement("script")
    script.src = EMBED_SCRIPT_SRC
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error("Failed to load Threads embed script"))
    document.body.appendChild(script)
  })
}

function processEmbeds() {
  window.instgrm?.Embeds?.process?.()
}

type ThreadsPostEmbedProps = {
  url: string
  maxWidth?: number
}

export function ThreadsPostEmbed({ url, maxWidth = 500 }: ThreadsPostEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading")

  useEffect(() => {
    let cancelled = false
    const container = containerRef.current
    if (!container) return

    container.innerHTML = ""
    setStatus("loading")

    async function load() {
      try {
        const response = await fetch(threadsOEmbedUrl(url, maxWidth))
        if (!response.ok) throw new Error("oEmbed request failed")

        const data = (await response.json()) as ThreadsOEmbedResponse
        if (!data.html) throw new Error("No embed HTML returned")

        if (cancelled || !containerRef.current) return

        containerRef.current.innerHTML = stripScriptTags(data.html)
        await loadEmbedScript()

        if (cancelled) return

        processEmbeds()
        setStatus("ready")
      } catch {
        if (!cancelled) setStatus("error")
      }
    }

    load()

    return () => {
      cancelled = true
    }
  }, [url, maxWidth])

  if (status === "error") {
    return (
      <p className="px-8 py-12 text-center text-sm text-muted-foreground">
        Couldn&apos;t load this Threads post.{" "}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-4"
        >
          View on Threads
        </a>
      </p>
    )
  }

  return (
    <div className="w-full">
      {status === "loading" && (
        <div className="flex items-center justify-center px-8 py-24">
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            Loading post…
          </span>
        </div>
      )}
      <div
        ref={containerRef}
        className={status === "ready" ? "w-full [&_blockquote]:mx-auto" : "sr-only"}
      />
    </div>
  )
}
