// Reads the FastAPI backend URL from Netlify's environment.
// While unset, the guestbook renders its empty state instead of erroring.

const BASE = import.meta.env.VITE_API_URL || ''

export const isLive = Boolean(BASE)

export async function getEntries() {
  if (!BASE) return []
  const res = await fetch(`${BASE}/entries`)
  if (!res.ok) throw new Error(`GET /entries failed: ${res.status}`)
  return res.json()
}

export async function postEntry(entry) {
  if (!BASE) throw new Error('VITE_API_URL is not set')
  const res = await fetch(`${BASE}/entries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry),
  })
  if (!res.ok) throw new Error(`POST /entries failed: ${res.status}`)
  return res.json()
}
