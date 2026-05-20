import { ArrowUpRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/useScrollReveal"

const projects = [
  {
    id: 1,
    title: "Geez Learning Platform",
    subtitle: "Language Education",
    description: "An interactive platform teaching the ancient Geʽez language through modern learning tools. Features structured lessons, quizzes, and a trilingual dictionary connecting Geʽez with Amharic and English.",
    technologies: ["React", "Node.js", "PostgreSQL", "Prisma"],
    live: "https://ethiogeez.com",
    image: "/projects/geez.png",
    color: "#FF6B35",
  },
  {
    id: 2,
    title: "Football Betting Intelligence",
    subtitle: "Sports Analytics",
    description: "A sophisticated sports analytics platform providing intelligent insights for football betting with real-time data analysis, match predictions, and comprehensive statistics.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "API"],
    live: "https://football-eta-two.vercel.app/",
    image: "/betting.png",
    color: "#10B981",
  },
  {
    id: 3,
    title: "MedFind",
    subtitle: "Healthcare App",
    description: "Healthcare application helping users locate nearby pharmacies and medical facilities. Search medications, compare prices, and find stores with available stock.",
    technologies: ["React", "Maps API", "Node.js", "MongoDB"],
    live: "https://med-find-tau.vercel.app/",
    image: "/medfind.png",
    color: "#7C3AED",
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const { ref, isVisible } = useScrollReveal(0.2)
  
  return (
    <a
      ref={ref}
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-card group block transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
        {/* Image Section */}
        <div 
          className={`relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px] overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
          style={{ backgroundColor: `${project.color}15` }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              const parent = e.currentTarget.parentElement
              if (parent) {
                parent.innerHTML = `
                  <div class="w-full h-full flex items-center justify-center" style="background: linear-gradient(135deg, ${project.color}20 0%, ${project.color}05 100%)">
                    <div class="text-center p-8">
                      <div class="text-7xl mb-4">${project.id === 1 ? '📚' : project.id === 2 ? '⚽' : '💊'}</div>
                      <p class="text-muted-foreground">Preview</p>
                    </div>
                  </div>
                `
              }
            }}
          />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
        </div>

        {/* Content Section */}
        <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
          <div className="flex items-center gap-3 mb-4">
            <span 
              className="px-3 py-1 rounded-full text-sm font-medium"
              style={{ backgroundColor: `${project.color}15`, color: project.color }}
            >
              {project.subtitle}
            </span>
            <span className="text-muted-foreground text-sm">0{project.id}</span>
          </div>
          
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {project.description}
          </p>
          
          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-[#f5f5f4] rounded-lg text-sm text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Link */}
          <div className="flex items-center gap-2 text-foreground font-medium group-hover:text-primary transition-colors">
            <span>View Project</span>
            <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>
      </div>
    </a>
  )
}

export function Projects() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.2)

  return (
    <section id="projects" className="section-padding bg-[#f5f5f4]">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div>
            <p className="text-primary font-medium mb-2">Portfolio</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
              Featured
              <br />
              <span className="creative-underline">Projects</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            A showcase of applications I've built, each solving unique problems with creative solutions.
          </p>
        </div>

        {/* Projects Grid - Creative Layout */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
