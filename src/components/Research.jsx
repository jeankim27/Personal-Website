import research from '../data/research.json'

export default function Research() {
  const { heading, lede, pillars, fit } = research
  return (
    <section id="research">
      <div className="wrap">
        <div className="secHead">
          <h2>{heading}</h2>
          <p className="lede">{lede}</p>
        </div>

        <div className="pillars">
          {pillars.map((p, i) => (
            <div className="pillar" key={i}>
              <h3>{p.h}</h3>
              <p>{p.p}</p>
            </div>
          ))}
        </div>

        <div className="fitBox">
          <h3>{fit.h}</h3>
          {fit.ps.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </section>
  )
}
