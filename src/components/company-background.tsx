const chapters = [
  {
    period: "The beginning",
    title: "A door opened in Bloomington",
    body: [
      "Red Door Church started with a simple conviction: everyone deserves a place at the table. A small group of neighbors began meeting in living rooms, sharing meals, studying scripture, and asking honest questions together.",
      "What we lacked in size, we made up for in intention — worship that was warm, teaching that was clear, and a community that showed up for one another outside of Sunday mornings.",
    ],
  },
  {
    period: "Growing together",
    title: "From gathering to church",
    body: [
      "As more people found their way through the door, we formalized as a church while keeping the same spirit — informal where it helps, serious where it matters, and always oriented toward welcome.",
      "We moved into our current rhythm of Sunday worship, monthly potlucks, and midweek connection. Each season brought new faces, new gifts, and a deeper sense that we were building something rooted in this city.",
    ],
  },
  {
    period: "Today",
    title: "Still opening the door",
    body: [
      "Today Red Door Church is a community of families, students, artists, retirees, and seekers — all learning to follow Jesus together in Bloomington. We are not perfect, but we are present for each other.",
      "Our story is still being written. If you are curious, weary, or looking for a faith community that makes room for questions, we would love to meet you.",
    ],
  },
]

type CompanyBackgroundProps = {
  showBackLink?: boolean
}

export function CompanyBackground({ showBackLink }: CompanyBackgroundProps) {
  return (
    <section id="background" className="py-24 px-4 pt-36 md:px-8 md:pt-48 bg-card border-t border-border">
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
          <span className="text-sm uppercase tracking-widest text-accent">Our Background</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-card-foreground leading-tight">
            Where we come from
          </h2>
          <p className="mt-6 text-lg text-white/90 leading-relaxed">
            Red Door Church did not begin as a program or a building. It began as a commitment —
            to worship God, love our neighbors, and keep the door open for anyone who wants to belong.
          </p>
        </div>

        <div className="space-y-0 border-t border-border">
          {chapters.map((chapter, index) => (
            <article
              key={chapter.title}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-12 lg:py-16 ${
                index < chapters.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="lg:col-span-4">
                <p className="text-sm uppercase tracking-widest text-accent">{chapter.period}</p>
                <h3 className="mt-3 text-2xl md:text-3xl font-bold text-card-foreground leading-snug">
                  {chapter.title}
                </h3>
              </div>
              <div className="lg:col-span-8 space-y-6">
                {chapter.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="text-lg text-white/90 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
