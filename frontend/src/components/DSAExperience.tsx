import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, Code2, ExternalLink } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { ShimmerText } from "@/components/ShimmerText"
import { SectionDivider } from "@/components/SectionDivider"
import { MagneticButton } from "@/components/MagneticButton"

export function DSAExperience() {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section
      ref={sectionRef}
      id="dsa-experience"
      className={`relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <SectionDivider variant="diagonal" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-primary mb-2 block">02. Experience</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            DSA <ShimmerText>Experience</ShimmerText>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and building expertise in Data Structures & Algorithms
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Cofounder Card */}
          <Card className="group relative overflow-hidden glass-card border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="inline-flex p-4 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors border border-primary/30 mb-4">
                  <Users className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                  Cofounder
                </Badge>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                Nexus Tutorial
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a cofounder of Nexus Tutorial, I'm passionate about making quality education 
                accessible to everyone. Together with my team, we're building a platform that 
                empowers students to excel in their technical journey.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary" className="text-xs">
                  Education
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Leadership
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Innovation
                </Badge>
              </div>
            </CardContent>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </Card>

          {/* Teaching Card */}
          <Card className="group relative overflow-hidden glass-card border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="inline-flex p-4 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-colors border border-accent/30 mb-4">
                  <GraduationCap className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
                  Instructor
                </Badge>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                DSA Instructor
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Teaching Data Structures and Algorithms at Nexus Tutorial, I help students 
                master fundamental concepts and problem-solving techniques. My approach focuses 
                on building strong foundations and developing critical thinking skills.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary" className="text-xs">
                  Data Structures
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Algorithms
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Problem Solving
                </Badge>
              </div>
            </CardContent>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
          </Card>
        </div>

        {/* LeetCode Profile Section */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm group hover:border-primary/50 transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6 flex-1">
                <div className="p-4 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors border border-primary/30">
                  <Code2 className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    LeetCode Profile
                  </h3>
                  <p className="text-muted-foreground">
                    Check out my problem-solving journey and coding challenges on LeetCode
                  </p>
                </div>
              </div>
              <MagneticButton
                size="lg"
                onClick={() => window.open("https://leetcode.com/biruk-demissie", "_blank")}
                className="group/btn relative overflow-hidden bg-gradient-to-r from-primary to-accent text-primary-foreground border-0 neon-border"
              >
                <span className="relative z-10 font-semibold flex items-center gap-2">
                  View Profile
                  <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              </MagneticButton>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

