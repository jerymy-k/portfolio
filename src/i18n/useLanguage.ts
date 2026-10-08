import { createContext, useContext } from 'react'
import type { Content, Lang } from '../data/content'

export type LanguageValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  /** The texts of the site in the current language. */
  t: Content
}

export const LanguageContext = createContext<LanguageValue | null>(null)

export function useLanguage(): LanguageValue {
  const value = useContext(LanguageContext)
  if (!value) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return value
}
