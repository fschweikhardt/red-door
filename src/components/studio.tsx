const highlights = [
  {
    title: "Local roots, wide reach",
    body: "We are a neighborhood studio with clients across the region — from storefronts on Main Street to brands shipping nationwide.",
  },
  {
    title: "Small team, senior attention",
    body: "No account managers in the middle. You work directly with the people designing and building your project.",
  },
  {
    title: "Systems over one-offs",
    body: "Logos, websites, signage, and social templates that feel cohesive — so your brand looks intentional everywhere.",
  },
  {
    title: "Honest timelines",
    body: "Clear milestones, regular check-ins, and realistic deadlines. We would rather under-promise and over-deliver.",
  },
]

export function Studio() {
  return (
    <section id="studio" className="py-24 px-4 md:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <span className="text-sm uppercase tracking-widest text-accent">The Studio</span>
            <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-card-foreground leading-tight">
              Design that feels personal, not generic.
            </h2>
            <p className="mt-6 text-white/90 leading-relaxed">
              We partner with local businesses who care about craft — cafés, boutiques, nonprofits,
              and founders building something worth noticing.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-0">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`py-10 ${index > 0 ? "border-t border-border" : ""}`}
              >
                <h3 className="text-xl md:text-2xl font-bold text-card-foreground">{item.title}</h3>
                <p className="mt-3 text-white/90 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
