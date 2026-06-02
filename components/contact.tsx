"use client"

import { Mail, MapPin, ArrowUpRight } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <span className="text-sm uppercase tracking-widest text-accent">Get in Touch</span>
            <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
              {"Let's build something great together."}
            </h2>

            <div className="mt-12 space-y-6">
              <a 
                href="mailto:hello@craftstudio.com"
                className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors duration-300 group"
              >
                <Mail className="w-5 h-5" />
                <span className="text-lg">hello@craftstudio.com</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <div className="flex items-center gap-4 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">123 Main Street, Your City</span>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm uppercase tracking-widest text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-accent transition-colors duration-300"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm uppercase tracking-widest text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-accent transition-colors duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm uppercase tracking-widest text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-accent text-accent-foreground font-bold uppercase tracking-widest hover:bg-accent/90 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
