import Media from './Media.jsx'

export default function Gallery({ items, className = 'gal' }) {
  return (
    <div className={className}>
      {items.map((g, i) => (
        <div className="galItem" key={i}>
          <div className="galMedia">
            <Media src={g.src} alt={g.caption || g.c || ''} kind={g.kind || 'photo'} />
          </div>
          <div className="galCap">{g.caption || g.c}</div>
        </div>
      ))}
    </div>
  )
}
