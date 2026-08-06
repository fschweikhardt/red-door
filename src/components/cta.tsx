type CtaProps = {
  /** Where the “When & where” button goes (home section vs homepage from another route). */
  whenWhereHref?: string
  /** Tighter spacing when a footer follows on a solid background block. */
  compact?: boolean
}

export function Cta({ whenWhereHref = "#basic-info", compact = false }: CtaProps) {
  return (
    <section
      id="cta"
      className={`relative z-[1] px-4 md:px-8 ${compact ? "py-16 md:py-20" : "py-20 pb-48"}`}
    >
      <div className="max-w-7xl mx-auto border border-border bg-card/50 p-10 md:p-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight max-w-2xl mx-auto">
          Come join us on a Sunday morning!
        </h2>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whenWhereHref}
            className="w-full sm:w-auto px-12 py-4 bg-accent text-accent-foreground font-bold uppercase tracking-widest hover:bg-accent/90 transition-colors duration-300"
          >
            WHEN & WHERE
          </a>
        </div>
      </div>
    </section>
  )
}
