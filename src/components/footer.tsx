const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "X / Twitter", href: "#" },
]

export function Footer() {
  return (
    <footer className="py-12 px-4 md:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tight text-foreground">
            CRAFT<span className="text-accent">.</span>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Craft Studio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
