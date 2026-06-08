import { ArrowUpRight, Calendar, Clock, MapPin } from "lucide-react"
import { FACEBOOK_PAGE_URL } from "@/lib/facebook"

const ADDRESS = {
  name: "Red Door Church",
  street: "123 Main Street",
  city: "Bloomington, IN 47401",
}

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${ADDRESS.street}, ${ADDRESS.city}`
)}`

export function BasicInfo() {
  return (
    <section id="basic-info" className="py-24 px-4 md:px-8 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm uppercase tracking-widest text-accent">Basic Info</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-card-foreground leading-tight">
            Visit us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border bg-background/40 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-5 h-5 text-accent" />
              <h3 className="text-sm uppercase tracking-widest text-white/90">Address</h3>
            </div>
            <address className="not-italic text-lg text-foreground leading-relaxed">
              <span className="block font-bold">{ADDRESS.name}</span>
              <span className="block mt-2">{ADDRESS.street}</span>
              <span className="block">{ADDRESS.city}</span>
            </address>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors duration-300"
            >
              Get directions
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="border border-border bg-background/40 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-5 h-5 text-accent" />
              <h3 className="text-sm uppercase tracking-widest text-white/90">Schedule</h3>
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-widest text-accent">Sundays</p>
                <p className="mt-2 text-2xl md:text-3xl font-bold text-foreground">
                  10:30 AM – 12:00 PM
                </p>
                <p className="mt-2 text-white/90 leading-relaxed">
                  Weekly gathering — all are welcome.
                </p>
              </div>

              <div className="pt-8 border-t border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-4 h-4 text-accent" />
                  <p className="text-sm uppercase tracking-widest text-accent">Monthly</p>
                </div>
                <p className="text-xl font-bold text-foreground">Potluck on the last Sunday</p>
                <p className="mt-2 text-white/90 leading-relaxed">
                  Bring a dish to share — we eat together after service.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-white/90 leading-relaxed max-w-2xl mx-auto">
          Schedules can change for holidays and special events. For the most up-to-date news,
          visit our{" "}
          <a
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent transition-colors duration-300 underline underline-offset-4"
          >
            Facebook page
          </a>{" "}
          or see the{" "}
          <a
            href="#news"
            className="text-foreground hover:text-accent transition-colors duration-300 underline underline-offset-4"
          >
            news section
          </a>{" "}
          above.
        </p>
      </div>
    </section>
  )
}
