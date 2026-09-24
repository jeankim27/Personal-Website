const LINKS = [
  ['#research', 'Research'],
  ['#publications', 'Publications'],
  ['#projects', 'Projects'],
  ['#experience', 'Experience'],
  ['#about', 'About'],
  ['#hobbies', 'Off the clock'],
]

export default function Nav() {
  return (
    <nav className="nav">
      <div className="wrap">
        {LINKS.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        <span className="spacer" />
        <a href="#experience" className="mono">CV.pdf</a>
      </div>
    </nav>
  )
}
