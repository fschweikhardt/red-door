import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Work } from "@/components/work"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Center column stripe for visual texture */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[90%] md:w-[70%] lg:w-[55%] bg-stripe" />
      </div>
      
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Work />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
