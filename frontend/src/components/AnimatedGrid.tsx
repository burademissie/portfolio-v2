import { useEffect, useRef } from "react"

export function AnimatedGrid() {
  const gridRef = useRef(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const handleMouseMove = (e) => {
      const rect = grid.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

        const cells = grid.querySelectorAll(".grid-cell")
        cells.forEach((cell) => {
          const cellRect = cell.getBoundingClientRect()
          const cellX = cellRect.left - rect.left + cellRect.width / 2
          const cellY = cellRect.top - rect.top + cellRect.height / 2

          const distance = Math.sqrt(
            Math.pow(x - cellX, 2) + Math.pow(y - cellY, 2)
          )
          const maxDistance = 200
          const intensity = Math.max(0, 1 - distance / maxDistance)

          const hue = (distance * 0.5 + Date.now() * 0.01) % 360
          const opacity = intensity * 0.3

          cell.style.backgroundColor = `hsl(${hue}, 70%, 50%, ${opacity})`
          cell.style.boxShadow = `0 0 ${intensity * 20}px hsl(${hue}, 70%, 50%, ${opacity * 0.5})`
        })
    }

    const handleMouseLeave = () => {
      const cells = grid.querySelectorAll(".grid-cell")
      cells.forEach((cell) => {
        cell.style.backgroundColor = "transparent"
        cell.style.boxShadow = "none"
      })
    }

    grid.addEventListener("mousemove", handleMouseMove)
    grid.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      grid.removeEventListener("mousemove", handleMouseMove)
      grid.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={gridRef}
      className="fixed inset-0 -z-10 grid grid-cols-20 gap-px overflow-hidden opacity-30"
      style={{
        gridTemplateColumns: "repeat(20, 1fr)",
      }}
    >
      {Array.from({ length: 400 }).map((_, i) => (
        <div
          key={i}
          className="grid-cell h-full w-full bg-transparent transition-all duration-300 ease-out"
        />
      ))}
    </div>
  )
}

