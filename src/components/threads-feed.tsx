import { useEffect, useState } from "react"
import { ThreadsEmbed } from "@/components/threads-embed"
import { ThreadsPostEmbed } from "@/components/threads-post-embed"
import { THREADS_PROFILE_URL } from "@/lib/threads"

type ThreadsFeedPost = {
  id: string
  permalink: string
  text: string
  timestamp: string
  mediaType: string
}

type ThreadsFeedResponse = {
  posts?: ThreadsFeedPost[]
  connected?: boolean
  error?: string
}

type ThreadsFeedProps = {
  maxWidth?: number
  fallbackHeight?: number
  title: string
}

export function ThreadsFeed({
  maxWidth = 500,
  fallbackHeight = 800,
  title,
}: ThreadsFeedProps) {
  const [postUrls, setPostUrls] = useState<string[] | null>(null)
  const [status, setStatus] = useState<"loading" | "ready" | "empty">("loading")

  useEffect(() => {
    let cancelled = false

    async function loadFeed() {
      try {
        const response = await fetch(`/api/threads-feed?limit=5`)
        const data = (await response.json()) as ThreadsFeedResponse
        const urls =
          data.posts?.map((post) => post.permalink).filter((url) => url.length > 0) ?? []

        if (cancelled) return

        setPostUrls(urls)
        setStatus(urls.length > 0 ? "ready" : "empty")
      } catch {
        if (!cancelled) {
          setPostUrls([])
          setStatus("empty")
        }
      }
    }

    loadFeed()

    return () => {
      cancelled = true
    }
  }, [])

  if (status === "loading") {
    return (
      <div
        className="flex items-center justify-center px-8 py-24"
        style={{ minHeight: fallbackHeight }}
      >
        <span className="text-sm uppercase tracking-widest text-muted-foreground">
          Loading updates…
        </span>
      </div>
    )
  }

  if (status === "empty" || !postUrls?.length) {
    return (
      <ThreadsEmbed
        href={THREADS_PROFILE_URL}
        height={fallbackHeight}
        title={title}
      />
    )
  }

  return (
    <div className="divide-y divide-border">
      {postUrls.map((url) => (
        <ThreadsPostEmbed key={url} url={url} maxWidth={maxWidth} />
      ))}
    </div>
  )
}
