const services = [
  {
    number: "01",
    title: "Strategy",
    description: "We define the roadmap that transforms your vision into measurable results."
  },
  {
    number: "02",
    title: "Design",
    description: "Creating visual experiences that captivate and communicate your brand story."
  },
  {
    number: "03",
    title: "Development",
    description: "Building robust digital solutions with precision and performance in mind."
  },
  {
    number: "04",
    title: "Growth",
    description: "Scaling your business with data-driven marketing and optimization."
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 px-4 md:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-sm uppercase tracking-widest text-accent">What We Do</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-card-foreground">
            Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {services.map((service, index) => (
            <div 
              key={service.number}
              className={`p-8 md:p-12 border-t border-border group hover:bg-accent/10 transition-colors duration-500 ${
                index % 2 === 1 ? "md:border-l" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-5xl md:text-7xl font-bold text-muted-foreground/30 group-hover:text-accent transition-colors duration-500">
                  {service.number}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
