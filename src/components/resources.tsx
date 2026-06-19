import { ArrowUpRight, BookOpen, Download, ExternalLink } from "lucide-react"

const downloads = [
  {
    title: "Project Brief Template",
    description: "A one-page worksheet to capture goals, audience, and scope before we kick off.",
    href: "/downloads/project-brief-template.pdf",
  },
  {
    title: "Brand Voice Worksheet",
    description: "Define tone, messaging pillars, and words to use (or avoid) for your brand.",
    href: "/downloads/brand-voice-worksheet.pdf",
  },
  {
    title: "Pre-Launch Checklist",
    description: "Final checks for websites and campaigns before anything goes live.",
    href: "/downloads/pre-launch-checklist.pdf",
  },
]

const books = [
  {
    title: "The Brand Gap",
    author: "Marty Neumeier",
    description:
      "A short, sharp read on how strategy and design connect — essential for anyone building a brand from scratch.",
    href: "https://www.amazon.com/Brand-Gap-Distance-Business-Strategy/dp/0321348109",
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    description:
      "The best primer on typography for designers and non-designers alike. Clear, visual, and immediately useful.",
    href: "https://www.amazon.com/Thinking-Type-2nd-revised-expanded/dp/1568989695",
  },
  {
    title: "Don't Make Me Think",
    author: "Steve Krug",
    description:
      "Web usability explained without jargon. We hand this to every client before a website project kicks off.",
    href: "https://www.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515",
  },
]

const externalLinks = [
  {
    title: "AIGA — Design Business Resources",
    description: "Articles and tools for running a creative practice.",
    href: "https://www.aiga.org/resources",
  },
  {
    title: "Google Fonts Knowledge",
    description: "Typography basics, pairing, and accessibility for the web.",
    href: "https://fonts.google.com/knowledge",
  },
  {
    title: "WCAG Quick Reference",
    description: "Web accessibility guidelines every project should consider.",
    href: "https://www.w3.org/WAI/WCAG22/quickref/",
  },
]

type ResourceItem = {
  title: string
  description: string
  href: string
}

type Book = {
  title: string
  author: string
  description: string
  href: string
}

function BookGrid({ items }: { items: Book[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((book) => (
        <article
          key={book.title}
          className="group flex flex-col border border-border bg-card/30 p-6 md:p-8 hover:border-accent/50 transition-colors duration-500"
        >
          <BookOpen className="w-5 h-5 text-accent mb-6" />
          <h4 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">
            {book.title}
          </h4>
          <p className="mt-1 text-sm uppercase tracking-widest text-white/90">
            {book.author}
          </p>
          <p className="mt-4 text-sm text-white/90 leading-relaxed flex-1">
            {book.description}
          </p>
          <a
            href={book.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-foreground hover:text-accent transition-colors duration-300"
          >
            Find book
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </article>
      ))}
    </div>
  )
}

function ResourceList({
  items,
  icon: Icon,
  linkLabel,
  external = false,
}: {
  items: ResourceItem[]
  icon: typeof Download
  linkLabel: string
  external?: boolean
}) {
  return (
    <ul className="space-y-0 divide-y divide-border">
      {items.map((item) => (
        <li key={item.title}>
          <a
            href={item.href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-6 hover:pl-2 transition-all duration-300"
          >
            <div className="flex items-start gap-4 min-w-0">
              <Icon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="mt-1 text-sm text-white/90 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
            <span className="shrink-0 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/90 group-hover:text-foreground transition-colors duration-300">
              {linkLabel}
              {external ? (
                <ExternalLink className="w-3.5 h-3.5" />
              ) : (
                <ArrowUpRight className="w-3.5 h-3.5" />
              )}
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export function Resources() {
  return (
    <section id="resources" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm uppercase tracking-widest text-accent">Resources</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
            Readings & tools
          </h2>
          <p className="mt-6 text-lg text-white/90 leading-relaxed">
            Selected downloads, book recommendations, deeper reading, and external references
            for anyone who wants to learn more about how we work and the craft behind what we do.
          </p>
        </div>

        <div className="divide-y divide-border border-y border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-12 lg:py-16">
            <div className="lg:col-span-3">
              <h3 className="text-xl font-bold text-foreground">Free Downloads</h3>
              <p className="mt-3 text-sm text-white/90 leading-relaxed">
                PDF worksheets and checklists you can use on your own or bring to a project kickoff.
              </p>
            </div>
            <div className="lg:col-span-9">
              <ResourceList items={downloads} icon={Download} linkLabel="Download PDF" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-12 lg:py-16">
            <div className="lg:col-span-3">
              <h3 className="text-xl font-bold text-foreground">Book Recommendations</h3>
              <p className="mt-3 text-sm text-white/90 leading-relaxed">
                A short shelf of books we recommend to clients, collaborators, and anyone
                curious about design and brand building.
              </p>
            </div>
            <div className="lg:col-span-9">
              <BookGrid items={books} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-12 lg:py-16">
            <div className="lg:col-span-3">
              <h3 className="text-xl font-bold text-foreground">External Links</h3>
              <p className="mt-3 text-sm text-white/90 leading-relaxed">
                Trusted voices and references we return to in our own work.
              </p>
            </div>
            <div className="lg:col-span-9">
              <ResourceList
                items={externalLinks}
                icon={ExternalLink}
                linkLabel="Visit"
                external
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
