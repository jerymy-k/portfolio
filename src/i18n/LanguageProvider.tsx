import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { content } from '../data/content'
import type { Lang } from '../data/content'
import { LanguageContext } from './useLanguage'

function initialLang(): Lang {
  // index.html already resolved the language (saved choice, then browser language).
  return document.documentElement.lang === 'en' ? 'en' : 'fr'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem('lang', next)
    } catch {
      // Private mode or blocked storage: the choice just lasts for this visit.
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = content[lang].meta.title
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: content[lang] }), [lang, setLang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
