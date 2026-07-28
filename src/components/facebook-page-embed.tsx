import { useEffect, useRef, useState } from "react"
import { facebookPageEmbedUrl } from "@/lib/facebook"

type FacebookPageEmbedProps = {
  tabs?: string
  height?: number
  title: string
}

export function FacebookPageEmbed({
  tabs = "timeline",
  height = 800,
  title,
}: FacebookPageEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<number | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let timeoutId: ReturnType<typeof setTimeout>

    const updateWidth = () => {
      const measured = Math.floor(container.getBoundingClientRect().width)
      // Facebook Page Plugin only supports 180px–500px
      const nextWidth = Math.min(500, Math.max(180, measured))
      if (nextWidth > 0) {
        setWidth(nextWidth)
      }
    }

    const scheduleUpdate = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(updateWidth, 100)
    }

    updateWidth()

    const observer = new ResizeObserver(scheduleUpdate)
    observer.observe(container)
    window.addEventListener("resize", scheduleUpdate)

    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
      window.removeEventListener("resize", scheduleUpdate)
    }
  }, [])

  const embedUrl =
    width !== null ? facebookPageEmbedUrl({ tabs, width, height }) : undefined

  return (
    <div ref={containerRef} className="w-full">
      {embedUrl && (
        <iframe
          key={embedUrl}
          title={title}
          src={embedUrl}
          width={width ?? undefined}
          height={height}
          className="w-full border-0 block"
          scrolling="no"
          allow="encrypted-media"
        />
      )}
    </div>
  )
}
