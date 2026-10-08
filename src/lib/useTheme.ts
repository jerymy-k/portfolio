import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

/** Light/dark theme stored on <html data-theme>. index.html sets the first value before paint. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(currentTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((previous) => {
      const next: Theme = previous === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem('theme', next)
      } catch {
        // Storage unavailable: keep the theme for this visit only.
      }
      return next
    })
  }, [])

  return { theme, toggle }
}
