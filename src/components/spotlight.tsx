const details = [
  { label: "Client", value: "Harbor & Co." },
  { label: "Scope", value: "Brand Identity, Packaging, Web" },
  { label: "Timeline", value: "12 Weeks" },
  { label: "Year", value: "2024" },
]

export function Spotlight() {
  return (
    <section id="spotlight" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 border border-border">
          <div className="lg:col-span-7 flex flex-col justify-between p-8 md:p-14 lg:min-h-[480px] bg-card">
            <div>
              <span className="text-sm uppercase tracking-widest text-accent">Case Study</span>
              <h2 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-card-foreground leading-[0.95]">
                Rebranding a waterfront retailer for their next chapter.
              </h2>
            </div>
            <p className="mt-10 text-lg text-white/90 leading-relaxed max-w-xl">
              A full identity refresh — from signage on the boardwalk to e-commerce —
              built around a warmer palette and a mark that reads at any size.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col border-t lg:border-t-0 lg:border-l border-border">
            <div className="flex-1 flex items-center justify-center p-8 md:p-14 bg-accent/10 min-h-[240px]">
              <span className="text-[clamp(4rem,12vw,9rem)] font-bold tracking-tighter text-accent/25 select-none">
                H&Co
              </span>
            </div>

            <dl className="grid grid-cols-2 gap-px bg-border">
              {details.map((item) => (
                <div key={item.label} className="bg-background p-6 md:p-8">
                  <dt className="text-xs uppercase tracking-widest text-white/90">{item.label}</dt>
                  <dd className="mt-2 text-sm md:text-base font-bold text-foreground">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
