import { Navigation } from "@/components/navigation"
import { KidsHero } from "@/components/kids-hero"
import { Values } from "@/components/values"
// import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export function KidsPage() {
  return (
    <main className="min-h-screen relative noise-texture">
      <div className="relative z-10">
        <Navigation />
        <KidsHero showBackLink/>
        <Values />
        {/* <Testimonials /> */}
        <Footer />
      </div>
    </main>
  )
}
