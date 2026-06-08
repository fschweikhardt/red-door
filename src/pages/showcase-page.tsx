import { Navigation } from "@/components/navigation"
import { Work } from "@/components/work"
import { Capabilities } from "@/components/capabilities"
import { Gatherings } from "@/components/gatherings"
import { Services } from "@/components/services"
import { Packages } from "@/components/packages"
import { About } from "@/components/about"
import { Values } from "@/components/values"
import { Process } from "@/components/process"
import { Spotlight } from "@/components/spotlight"
import { Clients } from "@/components/clients"
import { Testimonials } from "@/components/testimonials"
import { Community } from "@/components/community"
import { Faq } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export function ShowcasePage() {
  return (
    <main className="min-h-screen relative noise-texture">
      <div className="relative z-10">
        <Navigation />

        <div className="px-4 md:px-8 pt-28 pb-8 border-b border-border bg-card/40">
          <div className="max-w-7xl mx-auto">
            <p className="text-sm uppercase tracking-widest text-accent">Internal</p>
            <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Component showcase
            </h1>
            <p className="mt-4 text-white/90 max-w-2xl leading-relaxed">
              Archive of section layouts not used on the live homepage. Visit directly at{" "}
              <code className="text-foreground">/showcase</code> — this page is not linked from
              the site.
            </p>
            <a
              href="/"
              className="mt-6 inline-flex text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors duration-300"
            >
              ← Back to home
            </a>
          </div>
        </div>

        <Work />
        <Capabilities />
        <Gatherings />
        <Services />
        <Packages />
        <About />
        <Values />
        <Process />
        <Spotlight />
        <Clients />
        <Testimonials />
        <Community />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
