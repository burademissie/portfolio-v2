import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState } from "react"
import { MagneticButton } from "@/components/MagneticButton"
import { GlitchText } from "@/components/GlitchText"

const roles = ["Developer", "Designer", "Creator", "Innovator"]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadCV = () => {
    const link = document.createElement("a")
    link.href = "/projects/resume.pdf"
    link.download = "resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-16"
    >
      {/* Asymmetric background shapes */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-8 xl:gap-12">
          {/* Left side - Asymmetric text */}
          <div
            className={`space-y-6 relative z-20 flex-1 min-w-0 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-2">
              <p className="text-lg sm:text-xl text-primary font-mono">{"<developer>"}</p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black leading-tight">
                <span className="block text-foreground">Hi,</span>
                <GlitchText
                  text="I'm"
                  className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent neon-glow"
                />
                <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mt-2 whitespace-nowrap">
                  Developer
                </span>
              </h1>
            </div>
            
            <div className="h-16 sm:h-20 flex items-start">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muted-foreground">
                <span className="inline-block min-w-[200px] sm:min-w-[250px]">
                  {roles.map((role, index) => (
                    <span
                      key={role}
                      className={`absolute transition-all duration-500 ${
                        index === currentRole
                          ? "opacity-100 translate-y-0 text-primary"
                          : index < currentRole
                            ? "opacity-0 -translate-y-10"
                            : "opacity-0 translate-y-10"
                      }`}
                    >
                      {role}
                    </span>
                  ))}
                </span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed">
              Building <span className="text-primary font-semibold">cutting-edge</span> digital experiences with modern technologies and creative solutions
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <MagneticButton
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent text-primary-foreground border-0 neon-border"
              >
                <span className="relative z-10 font-semibold">View Projects</span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </MagneticButton>
              <MagneticButton
                size="lg"
                variant="outline"
                onClick={downloadCV}
                className="group border-primary/50 hover:bg-primary/10"
              >
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                Download CV
              </MagneticButton>
            </div>

            <div className="flex items-center gap-4 pt-6">
              <a
                href="https://github.com/burademissie/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all group glass-card"
              >
                <Github className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all group glass-card"
              >
                <Linkedin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:birukdemissie23@gmail.com"
                className="p-3 rounded-lg border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all group glass-card"
              >
                <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right side - Photo Display */}
          <div
            className={`hidden lg:flex justify-end items-center transition-all duration-1000 delay-300 relative z-10 flex-shrink-0 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Photo Container with Neon Border Effect */}
              <div className="relative group">
                {/* Glowing border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
                
                {/* Photo */}
                <div className="relative glass-card p-2 rounded-2xl border-primary/30 overflow-hidden">
                  <div className="w-48 h-64 rounded-xl overflow-hidden relative">
                    {/* Placeholder - Replace with your actual photo */}
                    <img
                      src="/profile_photo.png"
                      alt="Profile"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to gradient if image not found
                        e.target.style.display = 'none'
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 flex items-center justify-center">
                            <div class="text-center">
                              <div class="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-primary-foreground">
                                YN
                              </div>
                              <p class="text-sm text-muted-foreground">Add your photo</p>
                              <p class="text-xs text-muted-foreground/70">/public/profile-photo.jpg</p>
                            </div>
                          </div>
                        `
                      }}
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-lg border-primary/30 animate-bounce z-10">
                  <span className="text-xs font-semibold text-primary">Available</span>
                </div>
                <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-lg border-accent/30 animate-bounce delay-500 z-10">
                  <span className="text-xs font-semibold text-accent">Open to Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("#about")}
            className="p-3 rounded-lg border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all glass-card"
          >
            <ArrowDown className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </section>
  )
}

