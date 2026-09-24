import Media from './Media.jsx'

export default function ProjectCard({ project, onOpen }) {
  const cover = project.cover || project.gallery?.[0]?.src || null
  const kind = project.gallery?.[0]?.kind || 'photo'

  return (
    <button className="card" onClick={() => onOpen(project)}
            aria-label={`Open ${project.title}`}>
      <span className="cardTop">
        <span className="cardDate">{project.dateLabel}</span>
        <span className={`status ${project.status === 'wip' ? 'wip' : 'done'}`}>
          {project.status === 'wip' ? 'in progress' : 'complete'}
        </span>
      </span>

      <span className="cardMedia">
        <Media src={cover} alt="" kind={kind} />
      </span>

      <span className="cardBody">
        <span className="cardOrg">{project.org}</span>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <span className="tags">
          {project.tags.map(t => <span className="tag" key={t}>{t}</span>)}
        </span>
      </span>
    </button>
  )
}
