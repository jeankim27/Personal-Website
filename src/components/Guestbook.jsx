import { useEffect, useState } from 'react'
import { getEntries, postEntry, isLive } from '../lib/api.js'

// Not mounted in App.jsx yet. Uncomment the import and the <Guestbook />
// line there once the FastAPI backend is deployed and VITE_API_URL is set.

export default function Guestbook() {
  const [entries, setEntries] = useState([])
  const [form, setForm] = useState({ name: '', from: '', message: '', hp: '' })
  const [state, setState] = useState('idle')   // idle | sending | sent | error

  useEffect(() => {
    if (!isLive) return
    getEntries().then(setEntries).catch(() => setState('error'))
  }, [])

  const set = k => e => setForm({ ...form, [k]: e.target.value })

  async function submit(e) {
    e.preventDefault()
    if (form.hp) return                              // honeypot: bots fill it, people don't
    if (!form.name.trim() || !form.message.trim()) return

    setState('sending')
    try {
      const saved = await postEntry({
        name: form.name.trim(),
        from: form.from.trim(),
        message: form.message.trim(),
      })
      setEntries([saved, ...entries])
      setForm({ name: '', from: '', message: '', hp: '' })
      setState('sent')
    } catch {
      setState('error')
    }
  }

  return (
    <section id="guestbook">
      <div className="wrap">
        <div className="secHead">
          <h2>Guestbook</h2>
          <p className="lede">If you stopped by, leave a note. I read all of them.</p>
        </div>

        <div className="gbWrap">
          <form onSubmit={submit}>
            <div className="field">
              <label htmlFor="gbn">Name</label>
              <input id="gbn" maxLength={60} value={form.name} onChange={set('name')} required />
            </div>
            <div className="field">
              <label htmlFor="gbw">Where you're from</label>
              <input id="gbw" maxLength={70} value={form.from} onChange={set('from')}
                     placeholder="Lab, company, or city" />
            </div>
            <div className="field">
              <label htmlFor="gbm">Note</label>
              <textarea id="gbm" maxLength={400} value={form.message} onChange={set('message')} required />
            </div>

            <input className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true"
                   value={form.hp} onChange={set('hp')} />

            <button className="btn btn-primary" type="submit" disabled={state === 'sending'}>
              {state === 'sending' ? 'Sending…' : 'Sign the guestbook'}
            </button>

            <p className="hint">
              {state === 'error'
                ? "Couldn't reach the server. Try again in a moment."
                : 'Posts appear right away. I moderate and remove anything off.'}
            </p>
          </form>

          <div>
            {entries.length === 0
              ? <div className="empty">No notes yet. Be the first.</div>
              : entries.map((e, i) => (
                  <div className="gbEntry" key={e.id ?? i}>
                    <div className="gbMeta">
                      <span className="gbName">{e.name}</span>
                      {e.from && <span className="gbFrom">{e.from}</span>}
                      <span className="gbTime">{(e.created_at || '').slice(0, 10)}</span>
                    </div>
                    <p className="gbMsg">{e.message}</p>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  )
}
