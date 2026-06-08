const clients = [
  "Harbor & Co.",
  "Lin's Market",
  "Webb Electric",
  "Northside Roasters",
  "Parkview Dental",
  "Elm Street Goods",
  "Ridgeline Fitness",
  "Cedar & Stone",
]

export function Clients() {
  return (
    <section id="clients" className="py-16 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <span className="text-sm uppercase tracking-widest text-accent">Clients</span>
      </div>

      <div className="relative flex">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((client, index) => (
            <span
              key={`${client}-${index}`}
              className="mx-8 md:mx-12 text-2xl md:text-4xl font-bold tracking-tight text-white/90/40 hover:text-accent transition-colors duration-300"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
