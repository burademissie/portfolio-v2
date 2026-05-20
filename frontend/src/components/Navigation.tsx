import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("#home")}
            className="text-2xl font-extrabold"
          >
            <span className="gradient-text">BD</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-background hover:bg-foreground px-3 py-1.5 rounded-full transition-colors"
              >
                {item.name}
              </button>
            ))}
            
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border bg-background">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("#contact")}
                className="w-full mt-4 px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium"
              >
                Hire Me
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
