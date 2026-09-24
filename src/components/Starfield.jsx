import { useMemo } from 'react'

// Seeded so the stars don't reshuffle on every render.
function seeded(seed) {
  let s = seed
  return () => (s = (s * 1103515245 + 12345) % 2147483648) / 2147483648
}

export default function Starfield({ count = 360 }) {
  const stars = useMemo(() => {
    const rnd = seeded(11)
    return Array.from({ length: count }, () => ({
      cx: +(rnd() * 1600).toFixed(1),
      cy: +(rnd() * 900).toFixed(1),
      r: +(rnd() * 1.3 + 0.25).toFixed(2),
      o: +(rnd() * 0.78 + 0.12).toFixed(2),
    }))
  }, [count])

  return (
    <svg className="sf" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="heroGlow" cx="74%" cy="20%" r="50%">
          <stop offset="0%" stopColor="#3A2E66" stopOpacity=".9" />
          <stop offset="100%" stopColor="#17122A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1600" height="900" fill="#17122A" />
      <rect width="1600" height="900" fill="url(#heroGlow)" />
      {stars.map((s, i) => (
        <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="#E4E0FA" opacity={s.o} />
      ))}
    </svg>
  )
}
