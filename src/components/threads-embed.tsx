import { ArrowUpRight } from "lucide-react"
import { THREADS_PROFILE_URL } from "@/lib/threads"

type ThreadsEmbedProps = {
  href?: string
  height?: number
  title: string
}

export function ThreadsEmbed({
  href = THREADS_PROFILE_URL,
  height = 800,
  title,
}: ThreadsEmbedProps) {
  const handle = href.replace(/\/$/, "").split("/").pop() ?? "@reddoorbtown"

  return (
    <div
      className="flex flex-col items-center justify-center bg-background px-8 py-12 text-center"
      style={{ minHeight: height }}
    >
      <p className="sr-only">{title}</p>
      <span className="text-sm uppercase tracking-widest text-accent">Threads</span>
      <p className="mt-6 font-sans text-3xl uppercase tracking-tighter text-foreground">
        {handle}
      </p>
      <p className="mt-6 max-w-sm text-white/90 leading-relaxed">
        Announcements, service changes, and upcoming events — follow us on Threads for the
        latest updates.
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center gap-2 border border-border px-6 py-3 text-sm uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-colors duration-300"
      >
        Follow on Threads
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </div>
  )
}
