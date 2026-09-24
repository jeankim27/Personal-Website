// Draws a stand-in image so a project can go up before its photos are cleared.
// `kind` picks the palette and the sketch: notebook | plot | pub | photo | book

const PALETTES = {
  notebook: ['#F4F1E6', '#DAD2BC', '#B6A98B'],
  plot:     ['#EFEDF8', '#CBC5E6', '#6E74E8'],
  pub:      ['#F3F2F7', '#D6D2E6', '#A49DC0'],
  photo:    ['#E6E3F0', '#BEB7D6', '#8E86B4'],
  book:     ['#EAE7F4', '#C6BFDF', '#877FAE'],
}

export default function Placeholder({ kind = 'photo' }) {
  const pal = PALETTES[kind] || PALETTES.photo
  const [bg, mid, fg] = pal

  let inner = null

  if (kind === 'notebook') {
    inner = (
      <>
        {Array.from({ length: 9 }, (_, i) => (
          <line key={i} x1="16" y1={18 * (i + 1) + 14} x2="284" y2={18 * (i + 1) + 14} stroke={mid} strokeWidth="1" />
        ))}
        <path d="M30 62 L92 48 L150 84 L212 58" fill="none" stroke={fg} strokeWidth="2.4" />
        <rect x="176" y="112" width="86" height="58" fill="none" stroke={fg} strokeWidth="1.8" />
        <line x1="18" y1="0" x2="18" y2="225" stroke="#CC9988" strokeWidth="1" opacity=".5" />
      </>
    )
  } else if (kind === 'plot') {
    const pts = Array.from({ length: 9 }, (_, i) => {
      const n = i + 1
      return { x: 40 + n * 25, y: 176 - Math.round(Math.sin(n / 1.7) * 44 + n * 6) }
    })
    const d = 'M40 176 ' + pts.map(p => `L${p.x} ${p.y}`).join(' ')
    inner = (
      <>
        <line x1="40" y1="24" x2="40" y2="186" stroke={mid} strokeWidth="1.4" />
        <line x1="40" y1="186" x2="272" y2="186" stroke={mid} strokeWidth="1.4" />
        <path d={d} fill="none" stroke={fg} strokeWidth="2.4" />
        {pts.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="2.6" fill={fg} />)}
      </>
    )
  } else if (kind === 'pub') {
    inner = (
      <>
        <rect x="52" y="20" width="196" height="186" fill="#fff" stroke={mid} />
        {Array.from({ length: 13 }, (_, i) => (
          <rect key={i} x="70" y={40 + i * 12} width={i === 0 ? 118 : 140 - (i % 4) * 22}
                height={i === 0 ? 7 : 4} rx="1" fill={fg} opacity={i === 0 ? .85 : .45} />
        ))}
      </>
    )
  } else {
    inner = (
      <>
        <circle cx="96" cy="70" r="26" fill={fg} opacity=".48" />
        <path d="M0 225 L88 128 L154 186 L212 132 L300 225 Z" fill={fg} opacity=".6" />
        <path d="M0 225 L112 164 L190 225 Z" fill={fg} opacity=".36" />
      </>
    )
  }

  return (
    <svg className="ph" viewBox="0 0 300 225" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="300" height="225" fill={bg} />
      {inner}
    </svg>
  )
}
