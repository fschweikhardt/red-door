type ValuesProps = {
  showBackLink?: boolean
}

const values = [
  {
    word: "Grace",
    meaning: "We lead with mercy before judgment, making room for every story.",
  },
  {
    word: "Truth",
    meaning: "We pursue scripture with humility, courage, and open conversation.",
  },
  {
    word: "Belonging",
    meaning: "No one is an outsider here. The table is wide and the door is open.",
  },
  {
    word: "Service",
    meaning: "Faith moves outward — into our neighborhoods, schools, and streets.",
  },
]

export function Values({ showBackLink }: ValuesProps) {
  return (
    <section id="values" className="py-24 px-4 md:px-8 md:pt-48 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        {showBackLink && (
            <a
              href="/"
              className="mb-12 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white/90 hover:text-accent transition-colors duration-300"
            >
              ← Back to home
            </a>
        )}
        <div className="max-w-3xl mb-16">
          <span className="text-sm uppercase tracking-widest text-accent">Our Values</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            What Guides Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div
              key={value.word}
              className={`px-6 py-8 md:px-8 md:py-10 text-center lg:text-left ${
                index > 0 ? "sm:border-t lg:border-t-0 lg:border-l border-border" : ""
              } ${index > 0 && index < 2 ? "sm:border-t" : ""}`}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-accent mb-4">{value.word}</h3>
              <p className="text-white/90 leading-relaxed text-sm md:text-base">
                {value.meaning}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
