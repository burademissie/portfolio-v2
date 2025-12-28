import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap, Heart } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { ShimmerText } from "@/components/ShimmerText"
import { SectionDivider } from "@/components/SectionDivider"

const features = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable and scalable code that stands the test of time",
  },
  {
    icon: Palette,
    title: "Beautiful Design",
    description: "Creating visually stunning interfaces that users love to interact with",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Optimizing for speed and efficiency to deliver lightning-fast experiences",
  },
  {
    icon: Heart,
    title: "Passion Driven",
    description: "Bringing creativity and dedication to every project I work on",
  },
]

export function About() {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <SectionDivider variant="diagonal" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left side - Title with unique positioning */}
          <div className="lg:sticky lg:top-24">
            <div className="inline-block mb-4">
              <span className="text-sm font-mono text-primary mb-2 block">01. About</span>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight">
                About <ShimmerText>Me</ShimmerText>
              </h2>
            </div>
            <div className="glass-card p-6 rounded-xl border-primary/30">
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate developer who loves creating amazing digital experiences. 
                With expertise in modern web technologies, I bring ideas to life through 
                clean code and innovative solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          {/* Right side - Feature cards in asymmetric grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className={`group relative overflow-hidden glass-card border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 ${
                    index === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="inline-flex p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors border border-primary/30">
                        <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

