type KidsHeroProps = {
  showBackLink?: boolean
}

export function KidsHero({ showBackLink }: KidsHeroProps) {
  return (
    <section id="background" className="px-4 pt-36 md:px-8 md:pt-48 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        {showBackLink && (
          <a
            href="/"
            className="mb-12 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white/90 hover:text-accent transition-colors duration-300"
          >
            ← Back to home
          </a>
        )}
        <div className="max-w-3xl mb-16">
          <span className="text-sm uppercase tracking-widest text-accent">RD Kids</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-card-foreground leading-tight">
            Simple & Rooted in Love
          </h2>
          <p className="mt-6 text-lg text-white/90 leading-relaxed">
            Red Door Kids is comprised of three classes: 0-5, Young Elementary, and Youth. Everything we do with and for our RD Kids is founded upon two essential truths: God is love & they are the beloved children of God.  
          </p>
        </div>
      </div>
    </section>
  )
}
