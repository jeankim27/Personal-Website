import origins from '../data/origins.json'

// Placeholder drawn only until cassini.jpg lands in public/media/origins/.
function CassiniPlaceholder() {
  return (
    <svg viewBox="0 0 800 340" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="800" height="340" fill="#120E22" />
      <circle cx="470" cy="150" r="74" fill="#4A3F7A" />
      <path d="M470 150 m-74 0 a74 74 0 0 1 148 0" fill="#5E5197" />
      <ellipse cx="470" cy="152" rx="186" ry="34" fill="none" stroke="#8D82C4" strokeWidth="9" opacity=".9" />
      <ellipse cx="470" cy="152" rx="212" ry="40" fill="none" stroke="#6C5FA6" strokeWidth="4" opacity=".55" />
      <ellipse cx="470" cy="152" rx="232" ry="45" fill="none" stroke="#584D8C" strokeWidth="2" opacity=".4" />
    </svg>
  )
}

export default function OriginStrip() {
  const { heading, feature, items } = origins
  return (
    <div className="origins">
      <div className="originsHead">
        <h2>{heading}</h2>
      </div>

      <div className="originFeature">
        <figure>
          {feature.src
            ? <img src={feature.src} alt={feature.alt} />
            : <CassiniPlaceholder />}
        </figure>
        <figcaption>{feature.credit}</figcaption>
      </div>

      <div className="originRow">
        {items.map((o, i) => (
          <div className="origin" key={i}>
            <h3>{o.h}</h3>
            <span className="src">{o.s}</span>
            <p>{o.p}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
