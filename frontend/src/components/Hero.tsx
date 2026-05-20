import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden"
    >
      {/* Colorful blobs */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-[#FF6B35]/20 to-[#FF6B35]/5 blob" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-gradient-to-br from-[#7C3AED]/15 to-[#7C3AED]/5 blob" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#FF6B35]/5 to-[#7C3AED]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left - Content */}
          <div className="space-y-8">
            {/* Badge */}
            
            
            {/* Main heading */}
            <div className="space-y-4">
              <h1 
                className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight transition-all duration-700 delay-100 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                Helloooooooo
                <br />
                <span className="gradient-text">This is</span>
                <br />
                Biruk
              </h1>
              <p 
                className={`text-xl text-muted-foreground max-w-md leading-relaxed transition-all duration-700 delay-200 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                Full-stack developer
              </p>
            </div>

            {/* CTA */}
            <div 
              className={`flex flex-wrap items-center gap-4 transition-all duration-700 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <button
                onClick={() => scrollToSection("#projects")}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-all"
              >
                See my work
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
            </div>

            {/* Social links */}
            <div 
              className={`flex items-center gap-4 pt-4 transition-all duration-700 delay-400 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/burademissie/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:birukdemissie23@gmail.com"
                  className="p-2 hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Creative visual */}
          <div 
            className={`relative hidden lg:block transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#7C3AED] opacity-10" />
              
              {/* Profile/Creative element */}
              <div className="absolute inset-8 rounded-full bg-white shadow-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/profile_photo.png" 
                  alt="Biruk Demissie"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="text-center">
                        <span class="text-8xl font-bold gradient-text">BD</span>
                      </div>
                    `
                  }}
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
