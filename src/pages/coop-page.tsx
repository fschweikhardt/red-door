import { Navigation } from "@/components/navigation"
import { Team } from "@/components/team"
import { CompanyBackground } from "@/components/company-background"
import { CompanyEthos } from "@/components/company-ethos"
import { Footer } from "@/components/footer"

export function CoopPage() {
  return (
    <main className="min-h-screen relative noise-texture">
      <div className="relative z-10">
        <Navigation />
        <Team showBackLink />
        <CompanyBackground />
        <CompanyEthos />
        <Footer />
      </div>
    </main>
  )
}
