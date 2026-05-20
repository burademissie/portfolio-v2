import { useEffect } from "react"

export function CustomCursor() {
  useEffect(() => {
    // Set cursor to pointer globally
    document.body.style.cursor = "pointer"

    return () => {
      document.body.style.cursor = "auto"
    }
  }, [])

  return null
}
