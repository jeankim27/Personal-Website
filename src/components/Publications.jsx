import pubs from '../data/publications.json'

export default function Publications() {
  return (
    <section id="publications">
      <div className="wrap">
        <div className="secHead">
          <h2>Publications</h2>
          <p className="lede">{pubs.lede}</p>
        </div>

        {pubs.items.map((p, i) => (
          <div className="pub" key={i}>
            <div className="pubHead">
              <span className="pubRole">{p.role}</span>
              <span className="pubStatus">{p.status}</span>
            </div>
            <h3>
              {p.url
                ? <a href={p.url} target="_blank" rel="noreferrer">{p.title}</a>
                : p.title}
            </h3>
            <p>{p.note}</p>
          </div>
        ))}

        {pubs.reportsNote && <div className="pending">{pubs.reportsNote}</div>}
      </div>
    </section>
  )
}
