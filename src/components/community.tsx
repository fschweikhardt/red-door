import { ArrowUpRight } from "lucide-react"
import { FacebookPageEmbed } from "@/components/facebook-page-embed"
import { FACEBOOK_PAGE_URL } from "@/lib/facebook"

export function Community() {
  return (
    <section id="community" className="py-24 px-4 md:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="text-sm uppercase tracking-widest text-accent">Stay Connected</span>
            <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-card-foreground leading-tight">
              Follow along on Facebook
            </h2>
            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              Catch up with Red Door Church on our public Facebook page — service times,
              events, photos, and announcements from our community in Bloomington.
            </p>

            <ul className="mt-8 space-y-4 text-white/90">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1 h-1 shrink-0 rounded-full bg-accent" />
                Sunday service times and special events
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1 h-1 shrink-0 rounded-full bg-accent" />
                Photos and updates from our community
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1 h-1 shrink-0 rounded-full bg-accent" />
                A public page anyone can follow — no group approval needed
              </li>
            </ul>

            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-bold uppercase tracking-widest hover:bg-accent/90 transition-colors duration-300"
            >
              Visit Facebook Page
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="border border-border bg-background/40 overflow-hidden min-h-[600px]">
            <FacebookPageEmbed
              tabs="timeline"
              height={600}
              title="Red Door Church | Bloomington IN — Facebook Page"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
