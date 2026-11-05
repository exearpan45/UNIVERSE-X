import { useMemo } from 'react'

export default function Starfield() {
  const stars = useMemo(() => Array.from({ length: 110 }, (_, i) => ({
    left: `${(i * 37.71) % 100}%`,
    top: `${(i * 61.37) % 100}%`,
    delay: `${(i % 9) * -0.7}s`,
    size: i % 13 === 0 ? 3 : 1.5,
  })), [])

  return <div className="starfield" aria-hidden="true">
    {stars.map((star, i) => <i key={i} style={{ left: star.left, top: star.top, animationDelay: star.delay, width: star.size, height: star.size }} />)}
  </div>
}