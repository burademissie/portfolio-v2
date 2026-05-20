import { useEffect, useRef, useState } from "react"
import { Briefcase, GraduationCap, Code2, Trophy, ExternalLink } from "lucide-react"
import { useScrollReveal } from "@/hooks/useScrollReveal"

const experiences = [
  {
    icon: Briefcase,
    title: "Co-Founder & Teacher",
    company: "Nexus Tutorial",
    period: "2025 - 2026",
    description: "Co-founded an educational platform focused on empowering students through quality tutoring and mentorship. Teaching programming fundamentals and advanced concepts.",
    link: "https://www.nexustutorial.org/course/data-structures-algorithms",
    color: "#FF6B35",
  },
  {
    icon: Code2,
    title: "Full Stack Developer",
    company: "Private Client - SaaS",
    period: "2026",
    description: "Developed and maintained a comprehensive SaaS platform for a private client. Built scalable backend services, implemented complex business logic, and delivered production-ready features.",
    color: "#10B981",
  },
  {
    icon: Code2,
    title: "Freelance Developer",
    company: "Various Clients",
    period: "2026",
    description: "Building web applications for clients across various industries.",
    color: "#7C3AED",
  },
]

const dsaStats = {
  totalSolved: 370,
  easy: 120,
  medium: 200,
  hard: 50,
  link: "https://leetcode.com/u/biruk-demissie/",
}

export function Experience() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.2)
  const { ref: workRef, isVisible: workVisible } = useScrollReveal(0.1)
  const { ref: dsaRef, isVisible: dsaVisible } = useScrollReveal(0.1)
  const timelineRef = useRef<HTMLDivElement>(null)
  const [timelineProgress, setTimelineProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return
      const rect = timelineRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      // Start filling when the top of the timeline enters the viewport
      // Finish when the bottom of the timeline leaves the viewport
      const start = windowHeight * 0.8
      const visibleTop = start - rect.top
      const total = rect.height + start
      const progress = Math.min(Math.max(visibleTop / total, 0), 1)
      setTimelineProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-primary font-medium mb-2">Background</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Experience &
            <br />
            <span className="creative-underline">Skills</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div 
            ref={workRef}
            className={`transition-all duration-700 ${
              workVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              Work Experience
            </h3>
            
            <div ref={timelineRef} className="relative">
              {/* Static background line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border" />
              {/* Animated progress line */}
              <div
                className="absolute left-0 top-0 w-0.5 bg-primary transition-none origin-top"
                style={{ height: `${timelineProgress * 100}%` }}
              />
              <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative pl-8 pb-8 last:pb-0 transition-all duration-500 ${
                    workVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
                >
                  {/* Timeline dot */}
                  <div 
                    className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-background transition-colors duration-300"
                    style={{ backgroundColor: timelineProgress > index / experiences.length ? exp.color : 'hsl(var(--border))' }}
                  />
                  
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-lg">{exp.title}</h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                      >
                        Visit Website
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>

          {/* DSA Skills */}
          <div 
            ref={dsaRef}
            className={`transition-all duration-700 delay-200 ${
              dsaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Trophy className="h-5 w-5 text-accent" />
              </div>
              Problem Solving
            </h3>

            {/* LeetCode Card */}
            <div className="bg-gradient-to-br from-[#FFA116]/10 to-[#FFA116]/5 rounded-2xl p-8 border border-[#FFA116]/20">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#FFA116] rounded-xl flex items-center justify-center">
                    <Code2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">LeetCode</h4>
                    <p className="text-sm text-muted-foreground">@biruk-demissie</p>
                  </div>
                </div>
                <a
                  href={dsaStats.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#FFA116] text-white rounded-lg text-sm font-medium hover:bg-[#FFA116]/90 transition-colors flex items-center gap-2"
                >
                  View Profile
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* Stats */}
              <div className="text-center mb-6">
                <p className="text-5xl font-extrabold gradient-text mb-2">{dsaStats.totalSolved}+</p>
                <p className="text-muted-foreground">Problems Solved</p>
              </div>

              {/* Difficulty breakdown */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-green-500">{dsaStats.easy}</p>
                  <p className="text-xs text-muted-foreground">Easy</p>
                  <div className="mt-2 h-1 bg-green-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-yellow-500">{dsaStats.medium}</p>
                  <p className="text-xs text-muted-foreground">Medium</p>
                  <div className="mt-2 h-1 bg-yellow-100 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-red-500">{dsaStats.hard}</p>
                  <p className="text-xs text-muted-foreground">Hard</p>
                  <div className="mt-2 h-1 bg-red-100 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>
              </div>

              {/* Skills tags */}
              <div className="mt-6 pt-6 border-t border-[#FFA116]/20">
                <p className="text-sm text-muted-foreground mb-3">Key areas:</p>
                <div className="flex flex-wrap gap-2">
                  {["Arrays", "Trees", "Graphs", "DP", "Binary Search", "Two Pointers", "Sliding Window", "Recursion"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white rounded-full text-xs font-medium text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
