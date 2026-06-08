const quotes = [
  {
    text: "They took our messy ideas and turned them into a brand we are genuinely proud to put on everything.",
    name: "Sarah Lin",
    role: "Owner, Lin's Market",
  },
  {
    text: "Fast, thoughtful, and never precious about feedback. The website launched on time and converts better than our old one.",
    name: "Marcus Webb",
    role: "Founder, Webb Electric",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28 px-4 md:px-8 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-sm uppercase tracking-widest text-accent">Client Voices</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-card-foreground">
            Trusted by local businesses
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {quotes.map((quote) => (
            <figure key={quote.name} className="relative pt-8">
              <span
                className="absolute top-0 left-0 text-[6rem] md:text-[8rem] leading-none font-bold text-accent/15 select-none pointer-events-none"
                aria-hidden
              >
                &ldquo;
              </span>
              <blockquote className="relative text-xl md:text-2xl font-bold text-card-foreground leading-snug">
                {quote.text}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <div className="w-8 h-px bg-accent" />
                <div>
                  <div className="text-sm font-bold text-foreground">{quote.name}</div>
                  <div className="text-sm text-white/90">{quote.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
