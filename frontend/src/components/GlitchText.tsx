import { useEffect, useState } from "react"

export function GlitchText({ text, className = "" }) {
  const [displayText, setDisplayText] = useState(text)
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true)
      const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?"
      const glitchText = text
        .split("")
        .map((char) => {
          if (char === " ") return " "
          return chars[Math.floor(Math.random() * chars.length)]
        })
        .join("")

      setDisplayText(glitchText)

      setTimeout(() => {
        setDisplayText(text)
        setIsGlitching(false)
      }, 100)
    }, 5000)

    return () => clearInterval(interval)
  }, [text])

  return (
    <span
      className={`relative inline-block ${className} ${
        isGlitching ? "animate-pulse" : ""
      }`}
    >
      <span className="relative z-10">{displayText}</span>
      {isGlitching && (
        <>
          <span
            className="absolute inset-0 text-primary opacity-75 blur-sm"
            style={{ transform: "translate(2px, 2px)" }}
          >
            {displayText}
          </span>
          <span
            className="absolute inset-0 text-purple-500 opacity-75 blur-sm"
            style={{ transform: "translate(-2px, -2px)" }}
          >
            {displayText}
          </span>
        </>
      )}
    </span>
  )
}



