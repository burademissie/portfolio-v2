import { X, ExternalLink, Github, Calendar, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TechIcon } from "@/components/TechIcon"
import { useEffect } from "react"

export function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen || !project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-md animate-in fade-in duration-300" />
      
      {/* Modal Content */}
      <div
        className="relative w-full max-w-6xl max-h-[95vh] overflow-hidden glass-card border-primary/30 rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Border Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-lg glass-card border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all group"
          aria-label="Close"
        >
          <X className="h-5 w-5 text-primary group-hover:rotate-90 transition-transform" />
        </button>

        <div className="overflow-y-auto max-h-[95vh]">
          {/* Project Image */}
          <div className="relative w-full h-72 md:h-96 overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                const parent = e.target.parentElement
                parent.innerHTML = `
                  <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20">
                    <div class="text-center">
                      <div class="text-6xl mb-4">${project.title === 'E-Commerce Platform' ? '🛒' : project.title === 'Task Management App' ? '📋' : project.title === 'Social Media Dashboard' ? '📊' : project.title === 'Weather Forecast App' ? '🌤️' : project.title === 'Music Player' ? '🎵' : '💼'}</div>
                      <p class="text-sm text-muted-foreground">Project Screenshot</p>
                    </div>
                  </div>
                `
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 lg:p-10 space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  {project.title}
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies?.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:border-primary transition-colors flex items-center gap-1.5 px-3 py-1.5 text-sm"
                  >
                    <TechIcon name={tech} className="h-4 w-4" />
                    <span className="font-medium">{tech}</span>
                  </Badge>
                ))}
              </div>
            </div>

            {/* Project Details - Better Layout */}
            <div className="grid lg:grid-cols-2 gap-8 pt-6 border-t border-primary/20">
              {/* Left Column */}
              <div className="space-y-6">
                {project.overview && (
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      Project Overview
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {project.overview}
                    </p>
                  </div>
                )}

                {project.features && project.features.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-primary">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-primary mt-1 text-lg">▹</span>
                          <span className="text-base leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {project.challenges && (
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-primary">
                      Challenges & Solutions
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {project.challenges}
                    </p>
                  </div>
                )}

                {project.role && (
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      My Role
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {project.role}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-primary/20">
              <Button
                size="lg"
                className="flex-1 min-w-[200px] bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary group text-base font-semibold"
                asChild
              >
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  View Live Site
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 min-w-[200px] border-primary/30 hover:bg-primary/10 hover:border-primary group text-base font-semibold"
                asChild
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  View Source Code
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

