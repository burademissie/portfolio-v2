export function ShimmerText({ children, className = "" }) {
  return (
    <span
      className={`relative inline-block bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite] ${className}`}
    >
      {children}
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </span>
  )
}



