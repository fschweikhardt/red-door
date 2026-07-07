export function Welcome() {
  return (
    <section id="welcome" className="py-28 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* <span className="text-sm uppercase tracking-widest text-accent">Welcome</span> */}

        <div className="mt-10 flex items-center justify-center gap-6">
          <div className="hidden sm:block h-px flex-1 max-w-24 bg-accent/60" />
          <p className="text-2xl md:text-4xl font-bold tracking-tight text-foreground leading-snug">
          Come as you are. You are welcome here. 
          </p>
          <div className="hidden sm:block h-px flex-1 max-w-24 bg-accent/60" />
        </div>

        <p className="mt-10 text-lg leading-relaxed max-w-2xl mx-auto">
        Red Door Church is a refuge and pathway for the curious, questioning, earnest, cynical, faithful, tired, and _____ (fill in the blank). 
        </p>

        <div className="mt-14 inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm uppercase tracking-widest text-white/90">
          <span>Sunday Morning Worship</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-accent" />
          <span>Monthly Potlucks</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-accent" />
          <span>Life In Between</span>
        </div>
      </div>
    </section>
  )
}
