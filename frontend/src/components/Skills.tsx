import { useScrollReveal } from "@/hooks/useScrollReveal"

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons"
const SI = "https://cdn.simpleicons.org"

type Skill = {
  name: string
  logo: string
}

const row1: Skill[] = [
  { name: "Java",       logo: `${DEVICON}/java/java-original.svg` },
  { name: "JavaScript", logo: `${DEVICON}/javascript/javascript-original.svg` },
  { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` },
  { name: "Python",     logo: `${DEVICON}/python/python-original.svg` },
  { name: "PHP",        logo: `${DEVICON}/php/php-original.svg` },
  { name: "C++",        logo: `${DEVICON}/cplusplus/cplusplus-original.svg` },
  { name: "Dart",       logo: `${DEVICON}/dart/dart-original.svg` },
  { name: "Bash",       logo: `${DEVICON}/bash/bash-original.svg` },
]

const row2: Skill[] = [
  { name: "React",       logo: `${DEVICON}/react/react-original.svg` },
  { name: "Next.js",    logo: `${DEVICON}/nextjs/nextjs-original.svg` },
  { name: "Vue",         logo: `${DEVICON}/vuejs/vuejs-original.svg` },
  { name: "TailwindCSS", logo: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
  { name: "Bootstrap",   logo: `${DEVICON}/bootstrap/bootstrap-original.svg` },
  { name: "Vite",        logo: `${DEVICON}/vitejs/vitejs-original.svg` },
  { name: "Shadcn/ui",  logo: `${SI}/shadcnui/000000` },
  { name: "Flutter",     logo: `${DEVICON}/flutter/flutter-original.svg` },
]

const row3: Skill[] = [
  { name: "Node.js",    logo: `${DEVICON}/nodejs/nodejs-original.svg` },
  { name: "Express",    logo: `${DEVICON}/express/express-original.svg` },
  { name: "NestJS",     logo: `${DEVICON}/nestjs/nestjs-original.svg` },
  { name: "Django",     logo: `${DEVICON}/django/django-plain.svg` },
  { name: "MongoDB",    logo: `${DEVICON}/mongodb/mongodb-original.svg` },
  { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
  { name: "Firebase",   logo: `${DEVICON}/firebase/firebase-original.svg` },
  { name: "Supabase",   logo: `${DEVICON}/supabase/supabase-original.svg` },
  { name: "Docker",     logo: `${DEVICON}/docker/docker-original.svg` },
  { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-original.svg` },
  { name: "Linux",      logo: `${DEVICON}/linux/linux-original.svg` },
  { name: "Git",        logo: `${DEVICON}/git/git-original.svg` },
  { name: "VS Code",    logo: `${DEVICON}/vscode/vscode-original.svg` },
  { name: "Vim",        logo: `${DEVICON}/vim/vim-original.svg` },
  { name: "Render",     logo: `${SI}/render/46E3B7` },
  { name: "Photoshop",  logo: `${DEVICON}/photoshop/photoshop-original.svg` },
  { name: "Resend",     logo: `${SI}/resend/000000` },
]

function SkillChip({ skill }: { skill: Skill }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-sm border border-border/50 flex-shrink-0 select-none">
      <img
        src={skill.logo}
        alt={skill.name}
        width={28}
        height={28}
        className="object-contain"
        loading="lazy"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none"
        }}
      />
      <span className="text-sm font-semibold text-foreground/80 whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  )
}

function MarqueeRow({
  skills,
  direction,
  animClass,
}: {
  skills: Skill[]
  direction: "left" | "right"
  animClass: string
}) {
  const doubled = [...skills, ...skills]
  return (
    <div className="marquee-track overflow-hidden w-full">
      <div
        className={`flex gap-4 ${animClass}`}
        style={{ width: "max-content" }}
        aria-hidden={direction === "right"}
      >
        {doubled.map((skill, i) => (
          <SkillChip key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.2)

  return (
    <section id="skills" className="section-padding overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-primary font-medium mb-2">What I work with</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            My <span className="creative-underline">Tech Stack</span>
          </h2>
        </div>
      </div>

      {/* Marquee rows — full bleed, no max-width cap */}
      <div className="flex flex-col gap-5">
        {/* Row 1 — Languages → left */}
        <MarqueeRow skills={row1} direction="left" animClass="animate-marquee-left" />

        {/* Row 2 — Frontend → right */}
        <MarqueeRow skills={row2} direction="right" animClass="animate-marquee-right" />

        {/* Row 3 — Backend / DB / Tools → left (slower) */}
        <MarqueeRow skills={row3} direction="left" animClass="animate-marquee-left-slow" />
      </div>
    </section>
  )
}
