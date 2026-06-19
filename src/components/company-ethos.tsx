const principles = [
  {
    number: "01",
    title: "Grace before judgment",
    lead: "We believe the gospel makes room for people before it asks them to have everything figured out.",
    body: "That means we lead with mercy in conversation, patience in disagreement, and a default posture of welcome. Church should be a place where you can breathe — not perform.",
  },
  {
    number: "02",
    title: "Truth with humility",
    lead: "We take scripture seriously and ourselves lightly.",
    body: "We study the Bible together, ask hard questions openly, and hold convictions with courage without closing the door on those still searching. Faith and curiosity are not opposites here.",
  },
  {
    number: "03",
    title: "Belonging at the table",
    lead: "Jesus accepted all at his table — and so do we.",
    body: "The red door is a symbol, not a barrier. Whether you have been in church your whole life or are not sure you belong, there is a seat for you. Our potlucks, our worship, and our everyday life together are meant to reflect that.",
  },
  {
    number: "04",
    title: "Service in the city",
    lead: "Faith is not only personal — it moves outward.",
    body: "We care about Bloomington: our schools, our neighbors, our local businesses, and the people often overlooked. Serving our city is not a side project. It is part of what it means to follow Jesus together.",
  },
]

export function CompanyEthos() {
  return (
    <section id="ethos" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <span className="text-sm uppercase tracking-widest text-accent">Our Ethos</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
              What we stand for
            </h2>
            <p className="mt-6 text-white/90 leading-relaxed">
              These principles shape how we worship, how we treat each other, and how we show up
              in Bloomington. They are not slogans — they are commitments we return to again and again.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-0">
            {principles.map((principle, index) => (
              <article
                key={principle.title}
                className={`py-10 md:py-12 ${index > 0 ? "border-t border-border" : ""}`}
              >
                <div className="flex items-baseline gap-6 mb-4">
                  <span className="text-sm text-white/90 tabular-nums">{principle.number}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">{principle.title}</h3>
                </div>
                <p className="text-lg font-medium text-foreground/90 leading-relaxed mb-4">
                  {principle.lead}
                </p>
                <p className="text-white/90 leading-relaxed">{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
