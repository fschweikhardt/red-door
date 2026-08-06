const principles = [
  {
    title: "We Believe / Trust",
    body: "We affirm the Nicene and Apostles’ creeds, ancient and trusted, as our starting point and foundation. We believe, because of the work and life of Jesus, there is spaciousness, both/and’s, questions, hope, gray areas, grace, and love in the Kingdom of God.",
  },
  {
    title: "We All Belong",
    body: "First and foremost, Jesus accepts all at His table & so do we. We believe ALL are beloved children of God and belong to God. The transformational work of Jesus and the stunning love of God is the lens through which we read scripture, sing, and teach.",
  },
  {
    title: "We Gather Around THE Table",
    body: "At the center of Red Door is Jesus - most often symbolized in the bread and wine of the eucharist. It is here where we find the common ground of our belonging and welcome.",
  },
]

export function CompanyEthos() {
  return (
    <section id="ethos" className="relative z-[1] pt-12 md:pt-24 pb-12 md:pb-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Ethos
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-0">
            {principles.map((principle, index) => (
              <article
                key={principle.title}
                className={`py-10 md:py-12 ${index > 0 ? "border-t border-border" : ""}`}
              >
                <div className="flex items-baseline gap-6 mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">{principle.title}</h3>
                </div>
                <p className="text-lg text-white/90 leading-relaxed">{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
