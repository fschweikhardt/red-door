import { Navigation } from "@/components/navigation"
import { KidsHero } from "@/components/kids-hero"
import { Values } from "@/components/values"
import { Cta } from "@/components/cta"

export function KidsPage() {
  return (
    <main className="min-h-screen relative noise-texture">
      <div className="relative z-10">
        <Navigation />
        <KidsHero showBackLink/>
        <Values />
        <Cta />
      </div>
    </main>
  )
}
