import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TechIcon } from "@/components/TechIcon"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { ShimmerText } from "@/components/ShimmerText"

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 80 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 85 },
      { name: "Python", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 80 },
    ],
  },
]

export function Skills() {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            My <ShimmerText>Skills</ShimmerText>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
            >
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2 group/skill">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <div className="flex-shrink-0 p-1.5 rounded-md bg-primary/10 group-hover/skill:bg-primary/20 transition-colors">
                            <TechIcon name={skill.name} className="h-4 w-4" />
                          </div>
                          <span className="text-sm font-medium truncate group-hover/skill:text-primary transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground flex-shrink-0">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-primary/50"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${skillIndex * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Additional Skills
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  "RESTful APIs",
                  "Agile/Scrum",
                  "Test-Driven Development",
                  "Responsive Design",
                  "Performance Optimization",
                ].map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-sm px-4 py-2 hover:bg-primary/20 hover:text-primary hover:scale-110 transition-all cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

