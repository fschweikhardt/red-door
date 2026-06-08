import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { News } from "@/components/news"
import { BasicInfo } from "@/components/basic-info"
import { Ministries } from "@/components/ministries"
import { Studio } from "@/components/studio"
import { Resources } from "@/components/resources"
import { Cta } from "@/components/cta"
import { Footer } from "@/components/footer"
import { Welcome } from "@/components/welcome"

export function HomePage() {
  return (
    <main className="min-h-screen relative noise-texture">
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Welcome />
        <BasicInfo />
        <News />
        <Studio />
        <Ministries />
        <Resources />
        <Cta />
        <Footer />
      </div>
    </main>
  )
}
