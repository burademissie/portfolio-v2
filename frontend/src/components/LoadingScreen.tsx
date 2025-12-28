import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-background">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0s" }} />
        <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.2s" }} />
        <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.4s" }} />
        <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.6s" }} />
      </div>
    </div>
  )
}



