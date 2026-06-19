import { useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { News } from "@/components/news"
import { BasicInfo } from "@/components/basic-info"
import { Ministries } from "@/components/ministries"
import { ClientReviews } from "@/components/client-reviews"
import { Studio } from "@/components/studio"
import { Cta } from "@/components/cta"
import { Footer } from "@/components/footer"
import { Welcome } from "@/components/welcome"

export function HomePage() {
  useEffect(() => {
    const { hash } = window.location
    if (!hash) return

    const element = document.querySelector(hash)
    element?.scrollIntoView({ behavior: "smooth" })
  }, [])

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
        <ClientReviews />
        {/* <Resources /> */}
        <Cta />
        <Footer />
      </div>
    </main>
  )
}
