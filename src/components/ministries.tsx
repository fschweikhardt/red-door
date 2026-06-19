const ministries = [
  {
    title: "Community Focused",
    description:
      "Worship teams, creative collaborators, and artists shaping an atmosphere of beauty and reverence each week.",
    href: "/coop",
  },
  {
    title: "Children & Youth",
    description:
      "Age-appropriate teaching and mentorship that helps the next generation grow in faith with joy and confidence.",
    href: "/kids",
  },
]

export function Ministries() {
  return (
    <section id="ministries" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 max-w-2xl">
          <span className="text-sm uppercase tracking-widest text-accent">Ministries</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Many Gifts, One Body
          </h2>
        </div>

        <div className="space-y-0">
          {ministries.map((ministry, index) => {
            const isEven = index % 2 === 0

            return (
              <div
                key={ministry.title}
                className={`grid grid-cols-1 lg:grid-cols-2 border-t border-border ${
                  index === ministries.length - 1 ? "border-b" : ""
                }`}
              >
                <div
                  className={`flex flex-col justify-center p-8 md:p-14 lg:min-h-[320px] ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <span className="text-sm text-white/90 mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                    {ministry.title}
                  </h3>
                </div>

                <div
                  className={`flex flex-col justify-center p-8 md:p-14 lg:min-h-[320px] ${
                    isEven
                      ? "lg:order-2 lg:border-l border-border bg-card/50"
                      : "lg:order-1 lg:border-r border-border bg-card/50"
                  }`}
                >
                  <p className="text-lg text-white/90 leading-relaxed max-w-md">
                    {ministry.description}
                  </p>
                  <a
                    href={ministry.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors duration-300"
                  >
                    Learn More
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
