import { useState } from "react"
import { Menu, X } from "lucide-react"
import logo from "@/components/ui/RDLogo_DoorOnly.png"

const navItems = [
  { label: "News", href: "#news" },
  { label: "Co-op", href: "/coop" },
  { label: "Kids", href: "/kids" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

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

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNavClick(item.href)}
                className="text-sm uppercase tracking-widest text-white/90 hover:text-accent transition-colors duration-300 md:cursor-pointer"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-background z-40">
          <ul className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="text-2xl uppercase tracking-widest text-foreground hover:text-accent transition-colors duration-300"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
