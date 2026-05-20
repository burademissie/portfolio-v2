import { useEffect, useState, useRef } from "react"

export function ScrollLines() {
  const [scrollY, setScrollY] = useState(0)
  const [pageHeight, setPageHeight] = useState(3000)
  const [windowWidth, setWindowWidth] = useState(1200)
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    const handleResize = () => {
      setPageHeight(document.documentElement.scrollHeight)
      setWindowWidth(window.innerWidth)
    }
    
    handleScroll()
    handleResize()
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Calculate scroll progress
  const maxScroll = pageHeight - window.innerHeight
  const scrollProgress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0
  
  // Path calculations
  const pathLength = 8000
  const currentLength = pathLength * scrollProgress
  
  // Right side X position
  const rightX = windowWidth - 80

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
      <svg
        ref={svgRef}
        className="absolute top-0 left-0"
        width={windowWidth}
        height={pageHeight}
        style={{ 
          transform: `translateY(${-scrollY}px)`
        }}
      >
        <defs>
          {/* Gradient for the line */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FF6B35" stopOpacity="0.5" />
          </linearGradient>
          
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#FF6B35" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Left side path with corners */}
        <path
          d={`
            M 60 0
            L 60 350
            Q 60 380 90 380
            L 140 380
            Q 170 380 170 410
            L 170 700
            Q 170 730 140 730
            L 60 730
            Q 30 730 30 760
            L 30 1100
            Q 30 1130 60 1130
            L 180 1130
            Q 210 1130 210 1160
            L 210 1500
            Q 210 1530 180 1530
            L 80 1530
            Q 50 1530 50 1560
            L 50 1900
            Q 50 1930 80 1930
            L 150 1930
            Q 180 1930 180 1960
            L 180 2300
            Q 180 2330 150 2330
            L 60 2330
            Q 30 2330 30 2360
            L 30 2700
            Q 30 2730 60 2730
            L 200 2730
            Q 230 2730 230 2760
            L 230 3100
            Q 230 3130 200 3130
            L 70 3130
            Q 40 3130 40 3160
            L 40 3500
            Q 40 3530 70 3530
            L 160 3530
            Q 190 3530 190 3560
            L 190 3900
            Q 190 3930 160 3930
            L 50 3930
            Q 20 3930 20 3960
            L 20 ${pageHeight}
          `}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={pathLength}
          strokeDashoffset={pathLength - currentLength}
          style={{ transition: 'stroke-dashoffset 0.05s linear' }}
        />
        
        {/* Right side path with corners */}
        <path
          d={`
            M ${rightX} 100
            L ${rightX} 450
            Q ${rightX} 480 ${rightX - 30} 480
            L ${rightX - 100} 480
            Q ${rightX - 130} 480 ${rightX - 130} 510
            L ${rightX - 130} 850
            Q ${rightX - 130} 880 ${rightX - 100} 880
            L ${rightX - 20} 880
            Q ${rightX + 10} 880 ${rightX + 10} 910
            L ${rightX + 10} 1250
            Q ${rightX + 10} 1280 ${rightX - 20} 1280
            L ${rightX - 150} 1280
            Q ${rightX - 180} 1280 ${rightX - 180} 1310
            L ${rightX - 180} 1650
            Q ${rightX - 180} 1680 ${rightX - 150} 1680
            L ${rightX - 40} 1680
            Q ${rightX - 10} 1680 ${rightX - 10} 1710
            L ${rightX - 10} 2050
            Q ${rightX - 10} 2080 ${rightX - 40} 2080
            L ${rightX - 120} 2080
            Q ${rightX - 150} 2080 ${rightX - 150} 2110
            L ${rightX - 150} 2450
            Q ${rightX - 150} 2480 ${rightX - 120} 2480
            L ${rightX - 30} 2480
            Q ${rightX} 2480 ${rightX} 2510
            L ${rightX} 2850
            Q ${rightX} 2880 ${rightX - 30} 2880
            L ${rightX - 170} 2880
            Q ${rightX - 200} 2880 ${rightX - 200} 2910
            L ${rightX - 200} 3250
            Q ${rightX - 200} 3280 ${rightX - 170} 3280
            L ${rightX - 50} 3280
            Q ${rightX - 20} 3280 ${rightX - 20} 3310
            L ${rightX - 20} 3650
            Q ${rightX - 20} 3680 ${rightX - 50} 3680
            L ${rightX - 130} 3680
            Q ${rightX - 160} 3680 ${rightX - 160} 3710
            L ${rightX - 160} ${pageHeight}
          `}
          fill="none"
          stroke="url(#lineGradient2)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={pathLength}
          strokeDashoffset={pathLength - currentLength * 0.85}
          style={{ transition: 'stroke-dashoffset 0.05s linear' }}
        />
        
        {/* Corner dots - left side */}
        {[380, 730, 1130, 1530, 1930, 2330, 2730, 3130, 3530, 3930].map((y, i) => {
          const xPositions = [140, 60, 180, 80, 150, 60, 200, 70, 160, 50]
          const isVisible = scrollProgress > (y / pageHeight)
          return (
            <circle
              key={`left-dot-${i}`}
              cx={xPositions[i]}
              cy={y}
              r="5"
              fill={i % 2 === 0 ? "#FF6B35" : "#7C3AED"}
              opacity={isVisible ? 0.8 : 0.1}
              style={{ transition: 'opacity 0.3s ease-out' }}
            />
          )
        })}
        
        {/* Corner dots - right side */}
        {[480, 880, 1280, 1680, 2080, 2480, 2880, 3280, 3680].map((y, i) => {
          const offsets = [-100, -20, -150, -40, -120, -30, -170, -50, -130]
          const isVisible = scrollProgress > (y / pageHeight)
          return (
            <circle
              key={`right-dot-${i}`}
              cx={rightX + offsets[i]}
              cy={y}
              r="4"
              fill={i % 2 === 0 ? "#7C3AED" : "#FF6B35"}
              opacity={isVisible ? 0.6 : 0.1}
              style={{ transition: 'opacity 0.3s ease-out' }}
            />
          )
        })}
      </svg>
    </div>
  )
}
