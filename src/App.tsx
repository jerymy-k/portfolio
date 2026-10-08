import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { useLanguage } from './i18n/useLanguage'

export default function App() {
  const { t } = useLanguage()

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-sand focus:px-5 focus:py-2.5 focus:font-semibold focus:text-pine-900"
      >
        {t.nav.skip}
      </a>
      <Nav />
      <Hero />
      <main>
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Contact />
    </>
  )
}
