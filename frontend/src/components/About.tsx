import { Code2, Palette, Zap, Globe } from "lucide-react"
import { useScrollReveal } from "@/hooks/useScrollReveal"

const skills = [
  { icon: Code2, label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { icon: Globe, label: "Backend", items: ["Node.js", "PostgreSQL", "MongoDB", "Prisma"] },
  { icon: Palette, label: "Design", items: ["Figma", "UI/UX", "Responsive", "Animation"] },
  { icon: Zap, label: "Tools", items: ["Git", "Docker", "AWS", "Vercel"] },
]

export function About() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.2)
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.1)
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollReveal(0.1)

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div 
            ref={skillsRef}
            className={`relative transition-all duration-700 ${
              skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Background shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/10 to-[#7C3AED]/10 rounded-3xl rotate-6" />
              <div className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="p-8 h-full flex flex-col justify-center">
                  <div className="space-y-6">
                    {skills.map((skill, index) => {
                      const Icon = skill.icon
                      return (
                        <div 
                          key={skill.label} 
                          className={`flex items-center gap-4 transition-all duration-500 ${
                            skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                          }`}
                          style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
                        >
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF6B35]/10 to-[#7C3AED]/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-sm mb-1">{skill.label}</p>
                            <div className="flex flex-wrap gap-1">
                              {skill.items.map((item) => (
                                <span key={item} className="text-xs text-muted-foreground">
                                  {item}{skill.items.indexOf(item) < skill.items.length - 1 ? ' •' : ''}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div 
            ref={contentRef}
            className={`space-y-8 transition-all duration-700 delay-100 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div>
              <p className="text-primary font-medium mb-2">About Me</p>
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
                Passionate about
                <br />
                <span className="creative-underline">creating impact</span>
              </h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a full-stack developer based in Addis Ababa, Ethiopia, with a passion for 
                building digital products that make a real difference in people's lives.
              </p>
              <p>
                From preserving cultural heritage through the Geez Learning Platform to 
                making healthcare more accessible with MedFind, I believe technology 
                should serve humanity's greatest needs.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies, contributing to 
                open-source, or finding creative solutions to everyday problems.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              {[
                { value: "4+", label: "Years Experience" },
                { value: "10+", label: "Projects Built" },
                { value: "5+", label: "Happy Clients" },
                { value: "1" , label: "learning platform"}
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`transition-all duration-500 ${
                    contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                >
                  <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
