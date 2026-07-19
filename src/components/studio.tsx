const highlights = [
  {
    title: "We Learn From Each Other",
    body: "We have a unique co-op vibe. All voices matter and are heard. Even our posture at Sunday gatherings of sitting at round tables, with the communion table at the center, lends to our belief that we are in this together, and all our stories and voices are essential.",
  },
  {
    title: "We Are Unafraid of the Questions",
    body: "We ask the hard questions of faith and life. Some questions have answers. Some don't. Some answers are lived. We embrace the bravery, hope, and curiosity of asking and living the questions.",
  },
  {
    title: "We are Unapologetically Simple",
    body: "Our Sunday mornings are simple. We gather to encourage, to listen, to share, to take communion. Our church rhythm is simple. We care deeply for one another. We find our hope in Jesus.",
  },
  {
    title: "We look to the life and teaching of Jesus",
    body: "Amid it all, we find that it is still Jesus to whom we look to and find our hope. It is His life and teachings we abide in, as we live in the reality of God's goodness and love.",
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
