const principles = [
  {
    title: "We All Belong",
    lead: "First and foremost, Jesus accepts all at His table & so do we. As our weekly communion liturgy states “______, _______, ______, _______”  We believe we are beloved children of God and belong to God. The transformational work of Christ and the stunning love of God is the lens through which we read scripture, liturgies, and teach. ",
  },
  {
    title: "We Believe _______",
    lead: "While we adhere to the Nicene Creed, ancient and trusted, Red Door holds no official statement of beliefs, lists of do’s and don’t’s, or church hierarchy/patriarchy. We believe, because of the work and life of Christ, there is spaciousness, both/and’s, questions, hope, gray areas, grace, and love in the Kingdom of God.",
  },
  {
    title: "Giff say something",
    lead: "sdlkfdkslfjf  sdl fdjs flsf f  lksjdflsdkjsdflkjsdflksdjf",
    body: "sadlfkjsf lksjsdlfkjsdlfsjkfsl kdfjdflks jfslfsjflk fsdlkf sf slf fkj lsdf sfdls dfkljsd f",
  },
]

export function CompanyEthos() {
  return (
    <section id="ethos" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            {/* <span className="text-sm uppercase tracking-widest text-accent">Our Ethos</span> */}
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Our Ethos
            </h2>
            {/* <p className="mt-6 text-white/90 leading-relaxed">
              These principles shape how we worship, how we treat each other, and how we show up
              in Bloomington. They are not slogans — they are commitments we return to again and again.
            </p> */}
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
                <p className="text-lg font-medium text-foreground/90 leading-relaxed mb-4">
                  {principle.lead}
                </p>
                {principle.body && (
                  <p className="text-white/90 leading-relaxed">{principle.body}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
