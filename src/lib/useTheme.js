import { useEffect, useState } from 'react'

const KEY = 'theme'

function readStored() {
  try { return localStorage.getItem(KEY) } catch { return null }
}

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const stored = readStored()
    if (stored) return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem(KEY, theme) } catch { /* private mode */ }
  }, [theme])

  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))
  return { theme, toggle }
}
