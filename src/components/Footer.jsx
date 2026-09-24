import profile from '../data/profile.json'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div>
          {profile.links.map((l, i) => (
            <a key={i} href={l.url}>{l.label}</a>
          ))}
        </div>
        <div className="mono">jean.kim · © {new Date().getFullYear()}</div>
      </div>
    </footer>
  )
}
