import { useEffect, useRef } from "react"

export function CursorSpotlight() {
  const spotlightRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(139, 92, 246, 0.15), transparent 40%)`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: "radial-gradient(600px circle at 0px 0px, rgba(139, 92, 246, 0.15), transparent 40%)",
      }}
    />
  )
}



