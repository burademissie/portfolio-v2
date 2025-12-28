import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is touch-enabled (mobile/tablet)
    const checkMobile = () => {
      setIsMobile(
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches
      )
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Don't show custom cursor on mobile devices
    if (isMobile) {
      document.body.style.cursor = "auto"
      return
    }
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    // Check for interactive elements
    const handleMouseOver = (e) => {
      const target = e.target
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[role='button']") ||
        target.style.cursor === "pointer"

      setIsHovering(isInteractive)
    }

    const handleMouseOut = () => setIsHovering(false)

    window.addEventListener("mousemove", updateCursor)
    window.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseout", handleMouseOut)

    // Hide default cursor
    document.body.style.cursor = "none"

    return () => {
      window.removeEventListener("mousemove", updateCursor)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
      window.removeEventListener("resize", checkMobile)
      document.body.style.cursor = "auto"
    }
  }, [isMobile])

  if (isMobile || !isVisible) return null

  return (
    <>
      {/* Main Cursor Arrow - All Directional */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: isClicking ? "translate(-50%, -50%) scale(0.8)" : "translate(-50%, -50%)",
          transition: "transform 0.1s ease-out",
        }}
      >
        <svg
          width={isHovering ? "32" : "24"}
          height={isHovering ? "32" : "24"}
          viewBox="0 0 24 24"
          fill="none"
          className="transition-all duration-200"
          style={{
            filter: isHovering
              ? "drop-shadow(0 0 12px oklch(0.7 0.25 200)) drop-shadow(0 0 24px oklch(0.7 0.25 200)) drop-shadow(0 0 36px oklch(0.7 0.25 200))"
              : "drop-shadow(0 0 8px oklch(0.7 0.25 200)) drop-shadow(0 0 16px oklch(0.7 0.25 200 / 0.6))",
          }}
        >
          {/* Center dot */}
          <circle
            cx="12"
            cy="12"
            r={isHovering ? "2" : "1.5"}
            fill="oklch(0.7 0.25 200)"
          />
          {/* Top arrow */}
          <path
            d="M12 2L14 8L12 6L10 8Z"
            fill="oklch(0.7 0.25 200)"
            stroke="oklch(0.7 0.25 200)"
            strokeWidth="1"
          />
          {/* Right arrow */}
          <path
            d="M22 12L16 14L18 12L16 10Z"
            fill="oklch(0.7 0.25 200)"
            stroke="oklch(0.7 0.25 200)"
            strokeWidth="1"
          />
          {/* Bottom arrow */}
          <path
            d="M12 22L10 16L12 18L14 16Z"
            fill="oklch(0.7 0.25 200)"
            stroke="oklch(0.7 0.25 200)"
            strokeWidth="1"
          />
          {/* Left arrow */}
          <path
            d="M2 12L8 10L6 12L8 14Z"
            fill="oklch(0.7 0.25 200)"
            stroke="oklch(0.7 0.25 200)"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Cursor Glow Ring - Always Visible */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "all 0.2s ease-out",
        }}
      >
        <div
          className={`rounded-full border-2 border-primary/40 transition-all duration-200 ${
            isHovering ? "w-16 h-16" : "w-12 h-12"
          }`}
          style={{
            boxShadow: isHovering
              ? "0 0 30px oklch(0.7 0.25 200 / 0.8), 0 0 60px oklch(0.7 0.25 200 / 0.5), 0 0 90px oklch(0.7 0.25 200 / 0.3)"
              : "0 0 20px oklch(0.7 0.25 200 / 0.6), 0 0 40px oklch(0.7 0.25 200 / 0.4), 0 0 60px oklch(0.7 0.25 200 / 0.2)",
          }}
        />
      </div>

      {/* Cursor Trail Effect - More Visible */}
      <div
        className="fixed pointer-events-none z-[9997]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "all 0.3s ease-out",
        }}
      >
        <div
          className={`rounded-full bg-primary/20 blur-lg transition-all duration-500 ${
            isHovering ? "w-28 h-28" : "w-20 h-20"
          }`}
          style={{
            boxShadow: "0 0 30px oklch(0.7 0.25 200 / 0.4)",
          }}
        />
      </div>
    </>
  )
}

