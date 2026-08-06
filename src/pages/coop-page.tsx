import { Navigation } from "@/components/navigation"
import { Team } from "@/components/team"
import { About } from "@/components/about"
import { CompanyBackground } from "@/components/company-background"
import { CompanyEthos } from "@/components/company-ethos"
import { Cta } from "@/components/cta"

export function CoopPage() {
  return (
    <main className="relative flex min-h-screen flex-col noise-texture">
      <div className="relative z-10 flex min-h-screen flex-1 flex-col">
        <Navigation />
        <CompanyBackground showBackLink/>
        <About />
        <Team />
        <div className="flex flex-1 flex-col">
          <div className="background-dots-fade-out">
            <CompanyEthos />
          </div>
          <div className="relative z-[1] flex flex-1 flex-col bg-background pb-36 md:pb-24">
            <Cta whenWhereHref="/#basic-info" compact />
          </div>
        </div>
      </div>
    </main>
  )
}
