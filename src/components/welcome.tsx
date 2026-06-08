export function Welcome() {
  return (
    <section id="welcome" className="py-28 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-sm uppercase tracking-widest text-accent">Welcome</span>

        <div className="mt-10 flex items-center justify-center gap-6">
          <div className="hidden sm:block h-px flex-1 max-w-24 bg-accent/60" />
          <p className="text-2xl md:text-4xl font-bold tracking-tight text-foreground leading-snug">
            A church for the curious, the weary, and everyone in between.
          </p>
          <div className="hidden sm:block h-px flex-1 max-w-24 bg-accent/60" />
        </div>

        <p className="mt-10 text-lg leading-relaxed max-w-2xl mx-auto">
          Red Door Church is a community rooted in grace — where faith is explored honestly,
          neighbors are known by name, and every person has a place at the table.
        </p>

        <div className="mt-14 inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm uppercase tracking-widest text-white/90">
          <span>Sunday Worship</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-accent" />
          <span>Midweek Groups</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-accent" />
          <span>Serve Locally</span>
        </div>
      </div>
    </section>
  )
}
