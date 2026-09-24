import { useEffect, useRef } from 'react'
import Gallery from './Gallery.jsx'

export default function ProjectSheet({ project, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const dlg = ref.current
    if (!dlg) return
    if (project && !dlg.open) dlg.showModal()
    if (!project && dlg.open) dlg.close()
  }, [project])

  // Esc closes the native dialog directly, so sync state back up.
  useEffect(() => {
    const dlg = ref.current
    if (!dlg) return
    const handle = () => onClose()
    dlg.addEventListener('close', handle)
    return () => dlg.removeEventListener('close', handle)
  }, [onClose])

  const backdropClick = e => { if (e.target === ref.current) onClose() }

  return (
    <dialog ref={ref} onClick={backdropClick}>
      {project && (
        <div className="sheet">
          <div className="sheetHead">
            <div>
              <h3>{project.title}</h3>
              <div className="entryOrg">{project.org} · {project.dateLabel}</div>
            </div>
            <button className="closeX" onClick={onClose} aria-label="Close">✕</button>
          </div>

          <div className="sheetBody">
            <h4>The problem</h4>
            <p>{project.problem}</p>

            <h4>What I did</h4>
            <p>{project.approach}</p>

            <h4>Where it landed</h4>
            <p>{project.outcome}</p>

            {project.links?.length > 0 && (
              <>
                <h4>Links</h4>
                <p>
                  {project.links.map((l, i) => (
                    <a key={i} href={l.url} target="_blank" rel="noreferrer"
                       style={{ marginRight: 14 }}>{l.label}</a>
                  ))}
                </p>
              </>
            )}

            {project.log?.length > 0 && (
              <>
                <h4>Build log</h4>
                <ul className="log">
                  {project.log.map((l, i) => (
                    <li key={i}>
                      <time>{l.date}</time>
                      <span>{l.note}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {project.gallery?.length > 0 && (
              <>
                <h4>From the notebook</h4>
                <Gallery items={project.gallery} />
              </>
            )}

            {project.embargo && (
              <div className="embargo">
                Some details and images from this work are still in the NASA release
                process. This page describes method and role only.
              </div>
            )}
          </div>
        </div>
      )}
    </dialog>
  )
}
