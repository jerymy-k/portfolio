import { Download } from 'lucide-react'
import { links } from '../data/content'
import { useLanguage } from '../i18n/useLanguage'
import { GitHubIcon, LinkedInIcon } from './BrandIcons'

export function Contact() {
  const { t } = useLanguage()
  const c = t.contact
  const rowLink =
    'inline-flex items-center gap-2.5 font-semibold underline decoration-sand/30 decoration-2 underline-offset-[6px] hover:decoration-saffron'

  return (
    <footer id="contact" className="relative isolate overflow-hidden bg-pine-900 text-sand">
      <div className="flutes" aria-hidden="true" />

      <div className="mx-auto max-w-[1280px] px-5 pb-10 pt-24 md:px-10 md:pt-32">
        <h2 className="heading text-[clamp(2.6rem,8.5vw,7rem)]">
          {c.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="mt-6 max-w-[34rem] text-lg text-sand/85">{c.body}</p>

        <p className="mt-10">
          <a
            href={`mailto:${links.email}`}
            aria-label={`${c.emailLabel}, ${links.email}`}
            className="subheading break-all text-[clamp(1.5rem,4.6vw,3.25rem)] text-mint underline decoration-mint/35 decoration-2 underline-offset-8 hover:decoration-saffron"
          >
            {links.email}
          </a>
        </p>

        <ul className="mt-10 flex flex-wrap gap-x-9 gap-y-4 text-lg">
          <li>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className={rowLink}>
              <LinkedInIcon className="size-[1.05em]" />
              LinkedIn
            </a>
          </li>
          <li>
            <a href={links.github} target="_blank" rel="noreferrer" className={rowLink}>
              <GitHubIcon className="size-[1.1em]" />
              GitHub
            </a>
          </li>
          <li>
            <a href={links.cv} download className={rowLink}>
              <Download className="size-[1.1em]" aria-hidden="true" />
              {c.cv}
            </a>
          </li>
        </ul>

        <div className="mt-24 flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-t border-sand/20 pt-6 text-sm text-sand/70">
          <p>
            © 2026. {c.footer}
          </p>
          <a
            href={links.source}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-sand"
          >
            {c.source}
          </a>
        </div>
      </div>
    </footer>
  )
}
