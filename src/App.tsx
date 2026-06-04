import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Work } from "@/components/work"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function App() {
  return (
    <main className="min-h-screen relative">
      <div
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

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
