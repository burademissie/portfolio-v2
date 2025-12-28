import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { TechIcon } from "@/components/TechIcon"
import { TiltCard } from "@/components/TiltCard"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { ShimmerText } from "@/components/ShimmerText"
import { SectionDivider } from "@/components/SectionDivider"
import { ProjectModal } from "@/components/ProjectModal"
import { useState } from "react"

const projects = [
  {
    title: "Geez language learning platform",
    description: "An interactive platform designed to teach the ancient Geʽez language using modern learning tools. It connects Geʽez with Amharic and English through structured lessons, quizzes, and a trilingual dictionary. The platform helps preserve Ethiopia’s linguistic heritage while making Geʽez accessible to everyone.",
    technologies: ["Vite", "Node.js", "PostgreSQL" , "Prisma"],
    image: "/projects/geez.png",
    github: "https://github.com",
    live: "https://geez-phi.vercel.app/",
    overview: "An interactive Geʽez language learning platform built with modern web technologies, designed to make learning the ancient language accessible through structured lessons, quizzes, and a trilingual dictionary.",
    features: [
      "User authentication and progress tracking",
      "Structured Geʽez lessons and chapters",
      "Chapter-based quizzes and knowledge assessment",
      "Geʽez–Amharic–English trilingual dictionary",
      "User performance tracking and streaks",
      "Responsive and user-friendly interface"
    ],
    challenges: "Designing an effective learning flow for an ancient language while keeping the experience engaging was challenging. I addressed this by structuring lessons progressively and integrating interactive quizzes with instant feedback.",
    role: "Full-stack developer responsible for UI/UX design, backend development, database modeling, and learning system logic."
  },
  
]

export function Projects() {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 })
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <SectionDivider variant="wave" />
      
      <div className="container mx-auto relative z-10">
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-mono text-primary mb-2 block">02. Projects</span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight">
              My <ShimmerText>Projects</ShimmerText>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of projects showcasing innovation, creativity, and technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <TiltCard key={index} intensity={10}>
              <Card
                onClick={() => handleProjectClick(project)}
                className="group relative overflow-hidden glass-card border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 cursor-pointer"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/10 group-hover:to-primary/10 transition-all duration-500 pointer-events-none" />
                
                {/* Project Landing Page Image */}
                <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback to gradient placeholder if image not found
                      e.target.style.display = 'none'
                      const parent = e.target.parentElement
                      parent.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20">
                          <div class="text-center p-4">
                            <div class="text-4xl mb-2">${project.title === 'E-Commerce Platform' ? '🛒' : project.title === 'Task Management App' ? '📋' : project.title === 'Social Media Dashboard' ? '📊' : project.title === 'Weather Forecast App' ? '🌤️' : project.title === 'Music Player' ? '🎵' : '💼'}</div>
                            <p class="text-xs text-muted-foreground">Add screenshot</p>
                            <p class="text-xs text-muted-foreground/70">${project.image}</p>
                          </div>
                        </div>
                      `
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                </div>
                
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors text-xl font-bold mt-4">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:border-primary transition-colors flex items-center gap-1.5"
                    >
                      <TechIcon name={tech} className="h-3.5 w-3.5" />
                      <span>{tech}</span>
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 group/btn border-primary/30 hover:bg-primary/10 hover:border-primary"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 group/btn bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary"
                    asChild
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      Live
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}

