type KidsHeroProps = {
  showBackLink?: boolean
}

export function KidsHero({ showBackLink }: KidsHeroProps) {
  return (
    <section id="background" className="px-4 pt-36 pb-16 md:px-8 md:pt-48 md:pb-24">
      <div className="max-w-7xl mx-auto">
        {showBackLink && (
          <a
            href="/"
            className="mb-12 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white/90 hover:text-accent transition-colors duration-300"
          >
            ← BACK
          </a>
        )}
        <div className="max-w-3xl mt-8 mb-8 pt-12 border border-border bg-card/50 p-8 md:p-10">
          <span className="text-sm uppercase tracking-widest text-accent">RD Kids</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
            Simple & Rooted in Love
          </h2>
          <p className="mt-6 text-lg text-white/90 leading-relaxed">
            Red Door Kids is comprised of three classes: Babies & Toddlers, Young Elementary, and Youth. Everything we do with and for our RD Kids is founded upon two essential truths: God is love & they are the beloved children of God.  
          </p>
        </div>
      </div>
    </section>
  )
}
