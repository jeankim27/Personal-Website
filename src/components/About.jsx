import profile from '../data/profile.json'

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="secHead"><h2>About</h2></div>
        <div className="aboutGrid">
          <img className="portrait" src={profile.portrait} alt={profile.name} />
          <div>
            {profile.about.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </div>
    </section>
  )
}
