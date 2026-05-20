import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Animate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    // Hide loader after animation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1800)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center transition-opacity duration-500 ${
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
              animation: `slideRight ${1.5 + i * 0.2}s ease-in-out infinite`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent"
            style={{
              left: `${20 + i * 15}%`,
              top: 0,
              bottom: 0,
              animation: `slideDown ${1.5 + i * 0.2}s ease-in-out infinite`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Logo */}
      <div className="relative z-10 mb-8">
        <span className="text-6xl font-extrabold gradient-text">BD</span>
      </div>

      {/* Progress bar */}
      <div className="relative z-10 w-48 h-1 bg-border rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Loading text */}
      <p className="relative z-10 mt-4 text-sm text-muted-foreground">
        Loading<span className="animate-pulse">...</span>
      </p>

      <style>{`
        @keyframes slideRight {
          0%, 100% { transform: translateX(-100%); opacity: 0; }
          50% { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideDown {
          0%, 100% { transform: translateY(-100%); opacity: 0; }
          50% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
