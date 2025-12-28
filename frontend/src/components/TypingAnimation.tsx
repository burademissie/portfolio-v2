import { useState, useEffect } from "react"

export function TypingAnimation({ text, speed = 100, className = "" }) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length && !isDeleting) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, speed)
      return () => clearTimeout(timeout)
    } else if (currentIndex === text.length && !isDeleting) {
      const timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
      return () => clearTimeout(timeout)
    } else if (isDeleting && currentIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex - 1))
        setCurrentIndex(currentIndex - 1)
      }, speed / 2)
      return () => clearTimeout(timeout)
    } else if (isDeleting && currentIndex === 0) {
      setIsDeleting(false)
    }
  }, [currentIndex, isDeleting, text, speed])

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  )
}



