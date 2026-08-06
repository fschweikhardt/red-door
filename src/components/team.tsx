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

export function Team() {
  return (
    <section id="team" className="pb-8 md:pb-16 px-4 md:px-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-sm uppercase tracking-widest text-accent">Leadership</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 gap-y-12 md:gap-y-4 border border-border bg-card/50 p-8 md:p-10">
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
