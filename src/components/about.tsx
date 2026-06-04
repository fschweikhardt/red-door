const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "150+", label: "Projects Delivered" },
  { number: "98%", label: "Client Satisfaction" },
]

export function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <span className="text-sm uppercase tracking-widest text-accent">About Us</span>
            <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-card-foreground leading-tight">
              A few skilled humans doing the work of many.
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We are a small team of strategists, designers, and developers passionate about creating impactful digital experiences. We believe in quality over quantity, deep collaboration, and work that speaks louder than words.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based locally, working globally. We partner with ambitious businesses ready to stand out in their market.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 pt-12 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-sm uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
