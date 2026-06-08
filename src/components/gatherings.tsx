const gatherings = [
  {
    day: "Sunday",
    time: "10:00 AM",
    title: "Morning Worship",
    detail: "Music, teaching, and communion in the main sanctuary.",
  },
  {
    day: "Wednesday",
    time: "7:00 PM",
    title: "Midweek Prayer",
    detail: "A quiet hour of reflection, scripture, and open prayer.",
  },
  {
    day: "Saturday",
    time: "9:00 AM",
    title: "Community Serve",
    detail: "Hands-on outreach across our city — all are welcome.",
  },
]

export function Gatherings() {
  return (
    <section id="gatherings" className="py-24 px-4 md:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-sm uppercase tracking-widest text-accent">Gatherings</span>
            <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-card-foreground">
              When We Meet
            </h2>
          </div>
          <p className="text-white/90 max-w-sm leading-relaxed">
            Join us in person or online. Come as you are — there is always room.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gatherings.map((item) => (
            <article
              key={item.title}
              className="group relative flex flex-col border border-border bg-background/40 p-8 md:p-10 hover:border-accent/50 transition-colors duration-500"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="flex items-baseline justify-between gap-4 mb-8">
                <span className="text-sm uppercase tracking-widest text-accent">{item.day}</span>
                <span className="text-3xl md:text-4xl font-bold text-foreground">{item.time}</span>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-white/90 leading-relaxed mt-auto">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
