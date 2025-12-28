import {
  Code,
  Database,
  Server,
  GitBranch,
  Box,
  Cloud,
  Settings,
  Palette,
  FileCode,
  Terminal,
  Layers,
  Zap,
  CreditCard,
  BarChart3,
  MapPin,
  Music,
  Globe,
  HardDrive,
  Smartphone,
} from "lucide-react"

const iconMap = {
  // Frontend
  React: Code,
  TypeScript: FileCode,
  "Next.js": Layers,
  "Vue.js": Code,
  "Tailwind CSS": Palette,
  "Tailwind": Palette,
  "Framer Motion": Zap,
  
  // Backend
  "Node.js": Server,
  Express: Server,
  Python: Code,
  PostgreSQL: Database,
  Prisma: Database,
  MongoDB: Database,
  Redis: Database,
  
  // Tools & Services
  Git: GitBranch,
  Docker: Box,
  AWS: Cloud,
  "CI/CD": Settings,
  Figma: Palette,
  Webpack: Settings,
  Stripe: CreditCard,
  "D3.js": BarChart3,
  "OpenWeather API": Cloud,
  Leaflet: MapPin,
  "Web Audio API": Music,
  IndexedDB: HardDrive,
  PWA: Smartphone,
  Vite: Zap,
}

export function TechIcon({ name, className = "h-5 w-5" }) {
  const IconComponent = iconMap[name] || Code
  
  // Color mapping for different technologies
  const getColor = (techName) => {
    const colors = {
      React: "text-blue-400",
      TypeScript: "text-blue-500",
      "Next.js": "text-gray-100",
      "Vue.js": "text-green-400",
      "Tailwind CSS": "text-cyan-400",
      "Tailwind": "text-cyan-400",
      "Framer Motion": "text-purple-400",
      "Node.js": "text-green-500",
      Express: "text-gray-100",
      Python: "text-yellow-400",
      PostgreSQL: "text-blue-400",
      Prisma: "text-blue-300",
      MongoDB: "text-green-500",
      Redis: "text-red-500",
      Git: "text-orange-500",
      Docker: "text-blue-400",
      AWS: "text-orange-400",
      "CI/CD": "text-blue-300",
      Figma: "text-purple-400",
      Webpack: "text-blue-400",
      Stripe: "text-purple-400",
      "D3.js": "text-orange-400",
      "OpenWeather API": "text-yellow-400",
      Leaflet: "text-green-500",
      "Web Audio API": "text-pink-400",
      IndexedDB: "text-blue-400",
      PWA: "text-indigo-400",
      Vite: "text-yellow-400",
    }
    return colors[techName] || "text-primary"
  }

  return (
    <div className="flex items-center justify-center">
      <IconComponent className={`${className} ${getColor(name)}`} />
    </div>
  )
}

