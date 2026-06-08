import { Navigation } from "@/components/navigation"
import { Team } from "@/components/team"
import { Values } from "@/components/values"
import { Footer } from "@/components/footer"

export function TeamPage() {
  return (
    <main className="min-h-screen relative noise-texture">
      <div className="relative z-10">
        <Navigation />
        <Team showBackLink />
        <Values />
        <Footer />
      </div>
    </main>
  )
}
