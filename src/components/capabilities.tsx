const capabilities = [
  {
    title: "Brand Identity",
    description: "Logos, guidelines, and visual systems built to last.",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Web Design",
    description: "Marketing sites and storefronts that convert.",
    span: "lg:col-span-1",
  },
  {
    title: "Print & Packaging",
    description: "Menus, labels, brochures, and mailers.",
    span: "lg:col-span-1",
  },
  {
    title: "Signage",
    description: "Window graphics, wayfinding, and exterior presence.",
    span: "lg:col-span-2",
  },
  {
    title: "Social Templates",
    description: "On-brand Canva kits and campaign assets.",
    span: "lg:col-span-2",
  },
]

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm uppercase tracking-widest text-accent">Capabilities</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            What we make
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className={`group border border-border p-8 md:p-10 flex flex-col justify-end min-h-[180px] hover:border-accent/50 hover:bg-card/40 transition-colors duration-500 ${item.span}`}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                {item.title}
              </h3>
              <p className="mt-3 text-white/90 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
