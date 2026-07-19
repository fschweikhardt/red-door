const chapters = [
  {
    // period: "1",
    title: "Our Name",
    body: [
      "Red Door Church is a place of refuge and pathway for all seekers, believers, and wanderers. The name ‘Red Door’ is inspired by the historical use of red doors to signify a church that was a place of sanctuary and safety, as well as serving as a visual reminder of the work of Christ, sacrificed and risen.",
    ],
  },
  {
    // period: "2",
    title: "Our Hope",
    body: [
      "Our hope is that those who enter our doors would feel that. Come as you are. Bring your story, joys, sorrows, questions, your spiritual journey, your full self. You are safe. You are loved. You are welcome.",
    ],
  },
  {
    // period: "3",
    title: "Our Vibe",
    body: [
      "We are a small, but heartfelt community, with a unique co-op vibe. Our bi-vocationation pastors welcome the ideas, voices, and hopes of our community, and we all take part in making Red Door Church exist and flourish.",
    ],
  },
  {
    // period: "4",
    title: "Our Sundays",
    body: [
      "On Sunday mornings we sit at round tables; questions, discussions, and prayers are woven into the rhythm of teaching, liturgies, and communion. By turning our chairs towards one another (not towards a pulpit), we truly see each other, learn from each other, and get to know one another’s stories. Once a month, our Sunday service ends with a potluck.",
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
                <h3 className="text-2xl md:text-3xl font-bold text-card-foreground leading-snug">
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
