import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import logo from "@/components/ui/RDLogo_DoorOnly.png"

const navItems = [
  { label: "News", href: "#news" },
  { label: "Co-op", href: "/coop" },
  { label: "Kids", href: "/kids" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleNavClick = (href: string) => {
    setIsOpen(false)

    if (href.startsWith("#")) {
      const onHomePage =
        window.location.pathname === "/" || window.location.pathname === ""

      if (!onHomePage) {
        window.location.href = `/${href}`
        return
      }

      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: "smooth" })
      return
    }

    window.location.href = href
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="flex items-center justify-between px-4 py-4 md:px-8">
        <a href="/" className="block">
          <img
            src={logo}
            alt="Red Door Church"
            className="lg:pl-8 lg:h-20 h-16 w-auto"
          />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="text-sm uppercase tracking-widest text-white/90 hover:text-accent transition-colors duration-300 md:cursor-pointer"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="md:hidden p-2 text-foreground hover:text-accent transition-colors duration-300"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden absolute inset-x-0 top-full bg-background border-t border-border shadow-lg">
          <ul className="px-4 pt-2 pb-6">
            {navItems.map((item, index) => (
              <li
                key={item.href}
                className={
                  index < navItems.length - 1 ? "border-b border-border" : ""
                }
              >
                <button
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className="group flex w-full items-center justify-between py-6 text-left transition-colors duration-300"
                >
                  <span className="font-sans text-3xl uppercase tracking-tighter text-white group-hover:text-accent">
                    {item.label}
                  </span>
                  <span className="text-sm uppercase tracking-widest text-white/40 group-hover:text-accent transition-colors duration-300">
                    →
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
