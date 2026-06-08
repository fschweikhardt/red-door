import { ArrowUpRight } from "lucide-react"
import { FacebookPageEmbed } from "@/components/facebook-page-embed"
import { FACEBOOK_PAGE_URL } from "@/lib/facebook"

export function News() {
  return (
    <section id="news" className="py-28 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-widest text-accent">News & Events</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
            Latest updates
          </h2>
          <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-xl mx-auto">
            Announcements, service changes, and upcoming events — pulled live from our
            Facebook page.
          </p>
        </div>

        <div className="w-full max-w-[500px] mx-auto border border-border bg-card/40 overflow-hidden shadow-sm">
          <FacebookPageEmbed
            tabs="timeline,events"
            height={800}
            title="Red Door Church — News and Events on Facebook"
          />
        </div>

        <div className="mt-10 text-center">
          <a
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white/90 hover:text-accent transition-colors duration-300"
          >
            See all posts on Facebook
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
