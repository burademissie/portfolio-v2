import { useRef, useEffect, useState, ReactNode } from "react"

interface HorizontalScrollSectionProps {
  children: ReactNode
}

export function HorizontalScrollSection({ children }: HorizontalScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [contentWidth, setContentWidth] = useState(0)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1920)

  useEffect(() => {
    const container = containerRef.current
    const scrollContent = scrollRef.current
    if (!container || !scrollContent) return

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect()
      const containerHeight = container.offsetHeight - window.innerHeight
      
      // Calculate how far we've scrolled into the container
      const scrolled = -containerRect.top
      const progress = Math.max(0, Math.min(1, scrolled / containerHeight))
      
      setScrollProgress(progress)
    }

    const calculateWidth = () => {
      setContentWidth(scrollContent.scrollWidth)
      setWindowWidth(window.innerWidth)
    }

    calculateWidth()
    handleScroll()
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", calculateWidth)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", calculateWidth)
    }
  }, [])

  // The container height determines how much vertical scroll is needed
  // to complete the horizontal scroll
  const extraHeight = Math.max(0, contentWidth - windowWidth)
  const translateX = scrollProgress * extraHeight

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `calc(100vh + ${extraHeight}px)` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          ref={scrollRef}
          className="flex h-full will-change-transform"
          style={{
            transform: `translateX(-${translateX}px)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

