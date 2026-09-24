import { useMemo, useState } from 'react'
import projects from '../data/projects.json'
import ProjectCard from './ProjectCard.jsx'
import ProjectSheet from './ProjectSheet.jsx'

export default function ProjectGrid() {
  const [tag, setTag] = useState(null)
  const [open, setOpen] = useState(null)

  const tags = useMemo(
    () => [...new Set(projects.flatMap(p => p.tags))].sort(),
    []
  )
  const shown = tag ? projects.filter(p => p.tags.includes(tag)) : projects

  return (
    <section id="projects">
      <div className="wrap">
        <div className="secHead">
          <h2>Projects</h2>
          <p className="lede">
            Newest first. Open one for the problem, the method, and the notebook pages.
          </p>
        </div>

        <div className="filters">
          <button className="chip" aria-pressed={!tag} onClick={() => setTag(null)}>
            Everything
          </button>
          {tags.map(t => (
            <button key={t} className="chip" aria-pressed={tag === t}
                    onClick={() => setTag(t)}>
              {t}
            </button>
          ))}
        </div>

        <div className="grid">
          {shown.map(p => (
            <ProjectCard key={p.id} project={p} onOpen={setOpen} />
          ))}
        </div>
      </div>

      <ProjectSheet project={open} onClose={() => setOpen(null)} />
    </section>
  )
}
