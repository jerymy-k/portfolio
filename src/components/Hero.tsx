import { Download, Mail, MapPin } from 'lucide-react'
import portrait from '../assets/portrait.webp'
import { links } from '../data/content'
import { useLanguage } from '../i18n/useLanguage'
import { delay } from '../lib/delay'
import { GitHubIcon, LinkedInIcon } from './BrandIcons'

export function Hero() {
  const { t } = useLanguage()

  return (
    <header id="top" className="relative isolate overflow-hidden bg-pine-900 text-sand">
      <div className="flutes" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1280px] flex-col px-5 pt-28 md:px-10 md:pt-36">
        <div className="relative z-10 pb-10 md:pb-24">
          <p
            className="fade-in flex flex-wrap items-center gap-x-5 gap-y-1 text-lg font-medium text-mint md:text-xl"
            style={delay(80)}
          >
            <span>{t.hero.role}</span>
            <span className="inline-flex items-center gap-1.5 text-sand/75">
              <MapPin className="size-4" aria-hidden="true" />
              {t.hero.location}
            </span>
          </p>

          <h1 className="display mt-5 text-[23vw] md:text-[clamp(5rem,14.4vw,12.4rem)]">
            <span className="rise" style={delay(120)}>
              <span>Mohamed</span>
            </span>
            <span className="rise" style={delay(220)}>
              <span>Elkerymy</span>
            </span>
          </h1>

          <div className="fade-in" style={delay(650)}>
            <p className="mt-8 max-w-[34rem] text-xl leading-snug text-sand md:text-2xl">
              {t.hero.intro}
            </p>

            <p className="mt-5 flex items-start gap-3 text-base text-sand/85">
              <span
                className="mt-[0.5em] size-2.5 shrink-0 rounded-full bg-saffron"
                aria-hidden="true"
              />
              {t.hero.availability}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="rounded-full bg-sand px-6 py-3 font-semibold text-pine-900 transition-colors hover:bg-white"
              >
                {t.hero.seeProjects}
              </a>
              <a
                href={links.cv}
                download
                className="inline-flex items-center gap-2 rounded-full border border-sand/45 px-6 py-3 font-semibold transition-colors hover:border-sand hover:bg-sand/10"
              >
                <Download className="size-[1.1em]" aria-hidden="true" />
                {t.hero.downloadCv}
              </a>

              <ul className="flex items-center gap-1 xs:ml-2">
                <li>
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="grid size-11 place-items-center rounded-full hover:bg-sand/10"
                  >
                    <GitHubIcon className="size-[1.35rem]" />
                  </a>
                </li>
                <li>
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="grid size-11 place-items-center rounded-full hover:bg-sand/10"
                  >
                    <LinkedInIcon className="size-[1.3rem]" />
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${links.email}`}
                    aria-label={links.email}
                    className="grid size-11 place-items-center rounded-full hover:bg-sand/10"
                  >
                    <Mail className="size-[1.4rem]" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* The portrait stands on the bottom edge; its backdrop is the same wall. */}
        <img
          src={portrait}
          alt={t.hero.portraitAlt}
          width={740}
          height={740}
          className="portrait fade-in pointer-events-none mx-auto mt-auto block w-[min(88%,23rem)] select-none md:absolute md:bottom-0 md:right-4 md:mx-0 md:w-[clamp(21rem,38vw,33rem)] lg:right-10"
          style={delay(350)}
        />
      </div>
    </header>
  )
}
