export function Cta() {
  return (
    <section id="cta" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto border border-border bg-card/50 p-10 md:p-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight max-w-2xl mx-auto">
          Ready to sharpen how your business looks and feels?
        </h2>
        <p className="mt-6 text-white/90 max-w-lg mx-auto leading-relaxed">
          Tell us about your project. We will reply within one business day with next steps.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto px-12 py-4 bg-accent text-accent-foreground font-bold uppercase tracking-widest hover:bg-accent/90 transition-colors duration-300"
          >
            Start a Project
          </a>
          <a
            href="#work"
            className="w-full sm:w-auto px-12 py-4 border border-foreground text-foreground font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  )
}
