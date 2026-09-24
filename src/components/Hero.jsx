import profile from '../data/profile.json'
import Starfield from './Starfield.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import OriginStrip from './OriginStrip.jsx'

export default function Hero() {
  return (
    <header className="hero">
      <Starfield />
      <div className="wrap">
        <div className="heroTop">
          <span className="sig">{profile.name}</span>
          <ThemeToggle />
        </div>

        <div className="heroMain">
          <h1 className="heroName">
            <span>{profile.firstName}</span>
            <span>{profile.lastName}</span>
          </h1>
          <p className="heroBlurb">{profile.heroBlurb}</p>
          <p className="heroSub">{profile.heroSub}</p>
          <div className="heroActions">
            <a className="btn btn-solid" href="#research">What I work on</a>
            <a className="btn btn-ghost" href={profile.cv} download>Download CV</a>
          </div>
        </div>

        <OriginStrip />
      </div>
    </header>
  )
}
