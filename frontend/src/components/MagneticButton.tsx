import { Button } from "@/components/ui/button"
import { useMagneticButton } from "@/hooks/useMagneticButton"

export function MagneticButton({ children, className = "", ...props }) {
  const buttonRef = useMagneticButton(0.4)

  return (
    <Button ref={buttonRef} className={`transition-transform duration-200 ${className}`} {...props}>
      {children}
    </Button>
  )
}



