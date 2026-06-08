type TeamProps = {
  showBackLink?: boolean
}

const members = [
  { name: "Elena Ruiz", role: "Creative Director" },
  { name: "James Okonkwo", role: "Lead Designer" },
  { name: "Priya Shah", role: "Web Developer" },
  { name: "Tom Bradley", role: "Brand Strategist" },
]

export function Team({ showBackLink }: TeamProps) {
  return (
    <section id="team" className="py-24 px-4 md:px-8 pt-32">
      <div className="max-w-7xl mx-auto">
        {showBackLink && (
          <a
            href="/"
            className="mb-12 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white/90 hover:text-accent transition-colors duration-300"
          >
            ← Back to home
          </a>
        )}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-sm uppercase tracking-widest text-accent">The Team</span>
            <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Meet our community
            </h2>
          </div>
          <p className="text-white/90 max-w-sm leading-relaxed">
            The people who shape worship, welcome neighbors, and help Red Door Church feel
            like home week after week.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {members.map((member, index) => (
            <figure key={member.name} className="group">
              <div className="relative aspect-[3/4] overflow-hidden border border-border bg-card">
                <div
                  className={`absolute inset-0 transition-transform duration-700 group-hover:scale-105 ${
                    index % 2 === 0 ? "bg-accent/15" : "bg-accent/8"
                  }`}
                />
                <div className="absolute inset-0 flex items-end p-4 md:p-6 bg-gradient-to-t from-background/90 via-background/20 to-transparent">
                  <figcaption>
                    <div className="text-base md:text-lg font-bold text-foreground">{member.name}</div>
                    <div className="text-xs md:text-sm uppercase tracking-widest text-white/90 mt-1">
                      {member.role}
                    </div>
                  </figcaption>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
