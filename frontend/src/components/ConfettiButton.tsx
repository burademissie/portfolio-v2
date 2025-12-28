import { useEffect, useRef } from "react"

export function ConfettiButton({ children, onClick, ...props }) {
  const buttonRef = useRef(null)

  const createConfetti = (e) => {
    const button = buttonRef.current
    if (!button) return

    const rect = button.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2

    const colors = [
      "rgb(139, 92, 246)",
      "rgb(236, 72, 153)",
      "rgb(59, 130, 246)",
      "rgb(34, 197, 94)",
    ]

    for (let i = 0; i < 20; i++) {
      const confetti = document.createElement("div")
      confetti.style.position = "fixed"
      confetti.style.left = `${x}px`
      confetti.style.top = `${y}px`
      confetti.style.width = "8px"
      confetti.style.height = "8px"
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)]
      confetti.style.borderRadius = "50%"
      confetti.style.pointerEvents = "none"
      confetti.style.zIndex = "9999"

      const angle = (Math.PI * 2 * i) / 20
      const velocity = 3 + Math.random() * 2
      const vx = Math.cos(angle) * velocity
      const vy = Math.sin(angle) * velocity

      document.body.appendChild(confetti)

      let posX = x
      let posY = y
      let opacity = 1
      let rotation = 0

      const animate = () => {
        posX += vx
        posY += vy + 0.5
        rotation += 5
        opacity -= 0.02

        confetti.style.left = `${posX}px`
        confetti.style.top = `${posY}px`
        confetti.style.transform = `rotate(${rotation}deg)`
        confetti.style.opacity = opacity

        if (opacity > 0) {
          requestAnimationFrame(animate)
        } else {
          confetti.remove()
        }
      }

      requestAnimationFrame(animate)
    }

    if (onClick) onClick(e)
  }

  return (
    <button ref={buttonRef} onClick={createConfetti} {...props}>
      {children}
    </button>
  )
}



