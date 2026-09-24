import experience from '../data/experience.json'
import profile from '../data/profile.json'

function Entry({ x }) {
  return (
    <div className="entry">
      <div className="entryHead">
        <h3>{x.role}</h3>
        <span className="entryWhen">{x.when}</span>
      </div>
      <div className="entryOrg">{x.org}</div>
      <p>{x.detail}</p>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="secHead"><h2>Experience</h2></div>

        <div className="twoCol">
          <div>
            {experience.main.map((x, i) => <Entry x={x} key={i} />)}

            {experience.other?.length > 0 && (
              <>
                <div className="otherHead">
                  <h3>Other work</h3>
                  <p>{experience.otherNote}</p>
                </div>
                {experience.other.map((x, i) => <Entry x={x} key={i} />)}
              </>
            )}
          </div>

          <aside>
            <div className="resumeBox">
              <h3>Curriculum vitae</h3>
              <p>{profile.cvNote}</p>
              <a className="btn btn-primary" href={profile.cv} download>Download PDF</a>
            </div>

            <dl style={{ margin: '22px 0 0' }}>
              {profile.skills.map((s, i) => (
                <div className="skillRow" key={i}>
                  <dt>{s.k}</dt>
                  <dd>{s.v}</dd>
                </div>
              ))}
            </dl>

            <div className="awards">
              <h3>Awards</h3>
              <ul>{profile.awards.map((a, i) => <li key={i}>{a}</li>)}</ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
