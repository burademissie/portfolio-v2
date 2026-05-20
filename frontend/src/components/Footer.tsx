import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { ref, isVisible } = useScrollReveal(0.2)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer 
      ref={ref}
      className={`py-12 px-6 bg-foreground text-background transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <button onClick={() => scrollToSection("#projects")} className="text-sm text-background/60 hover:text-background transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("#about")} className="text-sm text-background/60 hover:text-background transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("#contact")} className="text-sm text-background/60 hover:text-background transition-colors">
              Contact
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/burademissie/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/biruk-demissie-46a6ab350/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:birukdemissie23@gmail.com"
              className="p-2.5 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-background/10 text-center">
          <p className="text-sm text-background/60 flex items-center justify-center gap-1">
            © {currentYear} Biruk Demissie.
          </p>
        </div>
      </div>
    </footer>
  )
}
