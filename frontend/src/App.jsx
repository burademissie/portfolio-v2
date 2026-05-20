import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { Projects } from "@/components/Projects"
import { Experience } from "@/components/Experience"
import { About } from "@/components/About"
import { Footer } from "@/components/Footer"
import { LoadingScreen } from "@/components/LoadingScreen"
import { ScrollLines } from "@/components/ScrollLines"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <LoadingScreen />
      <ScrollLines />
      <Navigation />
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Footer />
    </div>
  )
}

export default App
