export function SectionDivider() {
  return (
    <div className="relative h-12 flex items-center justify-center overflow-hidden">
      {/* Base line - subtle dark line */}
      <div className="absolute w-full h-[1px] bg-border/30" />
      
      {/* Moving light segment */}
      <div 
        className="absolute h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent animate-slide-line"
        style={{
          boxShadow: '0 0 8px oklch(0.7 0.25 200 / 0.5)',
        }}
      />
    </div>
  )
}
