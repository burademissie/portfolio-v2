import { AnimatedGrid } from "@/components/AnimatedGrid"
import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { DSAExperience } from "@/components/DSAExperience"
import { Projects } from "@/components/Projects"
import { Skills } from "@/components/Skills"
import { Footer } from "@/components/Footer"
import { ScrollProgress } from "@/components/ScrollProgress"
import { CursorSpotlight } from "@/components/CursorSpotlight"
import { FloatingParticles } from "@/components/FloatingParticles"
import { BackToTop } from "@/components/BackToTop"
import { CustomCursor } from "@/components/CustomCursor"
import { LoadingScreen } from "@/components/LoadingScreen"

function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <LoadingScreen />
      <CustomCursor />
      <AnimatedGrid />
      <FloatingParticles />
      <CursorSpotlight />
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <DSAExperience />
      <Projects />
      <Skills />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App