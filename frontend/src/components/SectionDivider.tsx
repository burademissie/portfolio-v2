export function SectionDivider({ variant = "default" }) {
  const variants = {
    default: (
      <div className="relative h-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/20 to-transparent transform -skew-y-1" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/10 to-transparent transform skew-y-1" />
      </div>
    ),
    wave: (
      <div className="relative h-32 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <path
            d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="oklch(0.7 0.25 200 / 0.1)"
            className="animate-pulse"
          />
          <path
            d="M0,80 Q300,40 600,80 T1200,80 L1200,120 L0,120 Z"
            fill="oklch(0.7 0.25 280 / 0.1)"
          />
        </svg>
      </div>
    ),
    diagonal: (
      <div className="relative h-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-primary/30 to-transparent transform -skew-y-3 origin-top" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-accent/20 to-transparent transform skew-y-3 origin-top" />
        </div>
      </div>
    ),
  }

  return variants[variant] || variants.default
}



