const projects = [
  {
    title: "Brand Revival",
    category: "Branding",
    year: "2024"
  },
  {
    title: "Digital Platform",
    category: "Web Development",
    year: "2024"
  },
  {
    title: "Campaign Launch",
    category: "Marketing",
    year: "2023"
  },
]

export function Work() {
  return (
    <section id="work" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-sm uppercase tracking-widest text-accent">Portfolio</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Selected Work
          </h2>
        </div>

        {/* Projects List */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group border-t border-border py-8 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 cursor-pointer hover:pl-4 transition-all duration-300"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-sm text-muted-foreground">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="text-2xl md:text-4xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
              <div className="flex items-center gap-6 md:gap-12">
                <span className="text-sm uppercase tracking-widest text-muted-foreground">
                  {project.category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {project.year}
                </span>
              </div>
            </div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-border" />
        </div>

        {/* View All Button */}
        <div className="mt-12 flex justify-center">
          <button className="group flex items-center gap-3 px-8 py-4 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 uppercase text-sm tracking-widest">
            View All Projects
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
