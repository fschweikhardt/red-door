const steps = [
  {
    phase: "Discover",
    detail: "We listen first — mapping goals, audience, and the gap between where you are and where you want to be.",
  },
  {
    phase: "Define",
    detail: "Strategy becomes structure. We shape the creative direction, scope, and visual language before a single pixel moves.",
  },
  {
    phase: "Design",
    detail: "Concepts evolve into systems — logos, layouts, type, and color that work across every touchpoint.",
  },
  {
    phase: "Deliver",
    detail: "Final files, live builds, and handoff docs. We stay through launch so nothing gets lost in translation.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-24 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <span className="text-sm uppercase tracking-widest text-accent">How We Work</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Our Process
          </h2>
        </div>

        <ol className="relative border-l border-border ml-3 md:ml-4">
          {steps.map((step, index) => (
            <li key={step.phase} className="relative pl-10 md:pl-14 pb-14 last:pb-0">
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-background" />
              <span className="text-xs uppercase tracking-widest text-white/90">
                Step {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold text-foreground">{step.phase}</h3>
              <p className="mt-3 text-white/90 leading-relaxed">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
