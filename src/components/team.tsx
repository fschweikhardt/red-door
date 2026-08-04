type TeamProps = {
  showBackLink?: boolean
}

const members = [
  {
    name: "The Reeds",
    role: "Co-Pastors",
    image: "/team/reeds.png",
  },
  {
    name: "The Allens",
    role: "Co-Pastors",
    image: "/team/allens.png",
  },
  {
    name: "The Kleins",
    role: "Red Door Kids",
    image: "/team/kleins.png",
  },
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
            ← BACK
          </a>
        )}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-sm uppercase tracking-widest text-accent">Leadership</span>
            {/* <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Leadership
            </h2> */}
          </div>
          {/* <p className="text-white/90 max-w-sm leading-relaxed">
            The people who shape worship, welcome neighbors, and help Red Door Church feel
            like home week after week.
          </p> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {members.map((member) => (
            <figure key={member.name} className="group">
              <div className="relative aspect-square overflow-hidden border border-border bg-card">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
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
