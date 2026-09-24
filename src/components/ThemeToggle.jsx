import { useTheme } from '../lib/useTheme.js'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <button className="themeBtn ui" onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}
