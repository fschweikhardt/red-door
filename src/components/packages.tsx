const tiers = [
  {
    name: "Starter",
    price: "$2,400",
    detail: "Best for new businesses needing a polished first impression.",
    includes: ["Logo suite", "Brand colors & type", "Business card design", "2 revision rounds"],
    featured: false,
  },
  {
    name: "Growth",
    price: "$6,500",
    detail: "Our most popular package for established local brands ready to level up.",
    includes: ["Full brand identity", "5-page website", "Social media kit", "Signage concepts", "3 revision rounds"],
    featured: true,
  },
  {
    name: "Partner",
    price: "Custom",
    detail: "Ongoing design support for teams that need a studio on retainer.",
    includes: ["Monthly design hours", "Priority turnaround", "Print & web support", "Quarterly brand review"],
    featured: false,
  },
]

export function Packages() {
  return (
    <section id="packages" className="py-24 px-4 md:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-accent">Packages</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-card-foreground">
            Clear pricing, no surprises
          </h2>
          <p className="mt-4 text-white/90 max-w-xl mx-auto">
            Every project is different — but these starting points help you plan. Custom quotes available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`relative flex flex-col p-8 md:p-10 border ${
                tier.featured
                  ? "border-accent bg-background md:-translate-y-2"
                  : "border-border bg-background/40"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-8 px-3 py-1 text-xs uppercase tracking-widest bg-accent text-accent-foreground">
                  Popular
                </span>
              )}

              <h3 className="text-2xl font-bold text-foreground">{tier.name}</h3>
              <div className="mt-4 text-4xl md:text-5xl font-bold text-accent">{tier.price}</div>
              <p className="mt-4 text-white/90 leading-relaxed">{tier.detail}</p>

              <ul className="mt-8 space-y-3 flex-1">
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-1.5 w-1 h-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-10 block text-center py-4 text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                  tier.featured
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "border border-foreground text-foreground hover:bg-foreground hover:text-background"
                }`}
              >
                Get Started
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
