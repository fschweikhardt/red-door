export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 md:px-8 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Oversized Typography */}
        <h1 className="text-[clamp(1.5rem,15vw,5rem)] leading-[.85] tracking-tighter text-foreground">
          <span className="block">RED</span>
          <span className="block text-accent">DOOR</span>
          <span className="block">CHURCH</span>
        </h1>

        {/* Tagline */}
        <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
		      <p className="text-lg md:text-xl text-white/90 max-w-md leading-relaxed">
			      Jesus accepts all at his table <br /> and so do we.        
		      </p>
        </div>
      </div>

      {/* Decorative Red Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-accent" />
    </section>
  )
}
