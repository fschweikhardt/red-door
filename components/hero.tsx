import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 md:px-8 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Oversized Typography */}
        <h1 className="text-[clamp(3rem,15vw,12rem)] font-bold leading-[0.85] tracking-tighter text-foreground">
          <span className="block">WE</span>
          <span className="block text-accent">CREATE</span>
          <span className="block">BOLD</span>
        </h1>

        {/* Tagline */}
        <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <p className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed">
            Premium craftsmanship and creative solutions for businesses that refuse to blend in.
          </p>
          <div className="flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground">
            <span>Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Decorative Red Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-accent" />
    </section>
  )
}
