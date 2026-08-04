export function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <span className="text-sm uppercase tracking-widest text-accent">HISTORY</span>
            <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-card-foreground leading-tight">
              A unique way of being church.
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-center">
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              Red Door Church started in 2011 with the goal of being a church who embodied shared leadership, transparency, and being open to change. We have had a journey of meeting in different places, at different times, with varying numbers of people. Now we are a small, simple church centered around Jesus, trying to follow him in real-life, practical ways.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              We know we're not everyone's cup of tea but we might be yours!
            </p>
          </div>
        </div>

        {/* Stats section removed for now */}
      </div>
    </section>
  )
}
