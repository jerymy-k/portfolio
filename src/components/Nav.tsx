import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { Lang } from '../data/content'
import { useLanguage } from '../i18n/useLanguage'
import { useTheme } from '../lib/useTheme'

const LANGS: Lang[] = ['fr', 'en']

export function Nav() {
  const { t, lang, setLang } = useLanguage()
  const { theme, toggle } = useTheme()
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  // Transparent over the hero, solid once the hero has scrolled away.
  useEffect(() => {
    const hero = document.getElementById('top')
    if (!hero) return
    const observer = new IntersectionObserver(([entry]) => setSolid(!entry.isIntersecting), {
      rootMargin: '-72px 0px 0px 0px',
    })
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const items = [
    { href: '#experience', label: t.nav.experience },
    { href: '#projects', label: t.nav.projects },
    { href: '#skills', label: t.nav.skills },
    { href: '#contact', label: t.nav.contact },
  ]

  const filled = solid || open
  const tone = filled
    ? 'border-line bg-bg/90 text-ink backdrop-blur-md'
    : 'border-transparent bg-transparent text-sand'

  return (
    <nav
      aria-label="Navigation"
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${tone}`}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-5 md:px-10">
        <a href="#top" className="subheading text-xl tracking-tight" onClick={() => setOpen(false)}>
          Mohamed Elkerymy
        </a>

        <div className="flex items-center gap-1 md:gap-6">
          <ul className="hidden items-center gap-7 text-[0.95rem] font-medium md:flex">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="underline-offset-8 decoration-saffron decoration-2 hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div
            role="group"
            aria-label={t.nav.language}
            className="flex items-center rounded-full border border-current/25 p-0.5 text-sm font-semibold"
          >
            {LANGS.map((code) => {
              const active = code === lang
              return (
                <button
                  key={code}
                  type="button"
                  lang={code}
                  aria-pressed={active}
                  onClick={() => setLang(code)}
                  className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
                    active
                      ? filled
                        ? 'bg-brand text-on-brand'
                        : 'bg-sand text-pine-900'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  {code}
                </button>
              )
            })}
          </div>

          <button
            type="button"
            onClick={toggle}
            aria-label={theme === 'dark' ? t.nav.themeToLight : t.nav.themeToDark}
            className="grid size-10 place-items-center rounded-full hover:bg-current/10"
          >
            {theme === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="grid size-10 place-items-center rounded-full hover:bg-current/10 md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <ul id="mobile-menu" className="border-t border-line px-5 pb-4 md:hidden">
          {items.map((item) => (
            <li key={item.href} className="border-b border-line last:border-b-0">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="subheading block py-3.5 text-2xl"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
