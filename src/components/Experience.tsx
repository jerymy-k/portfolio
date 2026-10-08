import { commits } from '../data/content'
import { useLanguage } from '../i18n/useLanguage'
import { Section } from './Section'

export function Experience() {
  const { t, lang } = useLanguage()
  const e = t.experience

  const formatDate = (iso: string) =>
    new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-GB', {
      day: '2-digit',
      month: 'short',
      timeZone: 'UTC',
    }).format(new Date(`${iso}T00:00:00Z`))

  return (
    <Section id="experience" title={e.title} tone="soft">
      <article className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <h3 className="subheading text-3xl md:text-4xl">{e.role}</h3>
          <p className="mt-2 text-lg font-semibold text-brand">{e.company}</p>
          <p className="text-muted">{e.period}</p>

          <p className="mt-6 text-lg">{e.summary}</p>

          <ul className="mt-6 space-y-3.5">
            {e.items.map((item) => (
              <li key={item} className="relative pl-6">
                <span
                  className="absolute left-0 top-[0.68em] h-px w-3.5 bg-brand"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-7 text-muted">
            <span className="font-semibold text-ink">
              {e.stackLabel}
              {lang === 'fr' ? '\u00a0: ' : ': '}
            </span>
            {e.stack.join(', ')}
          </p>
        </div>

        {/* Real commit messages: the proof behind the list on the left. */}
        <figure className="self-start lg:col-span-6">
          <div className="overflow-hidden rounded-xl border border-sand/10 bg-pine-950 text-sand shadow-[0_24px_60px_-28px_rgb(2_31_27/0.7)]">
            <p className="border-b border-sand/15 px-5 py-3 font-mono text-[0.8rem] text-mint">
              git log --author=jerymy-k --oneline
            </p>
            <ol className="divide-y divide-sand/10 font-mono text-[0.82rem] leading-relaxed">
              {commits.map((commit) => (
                <li
                  key={commit.message}
                  className="grid grid-cols-[4.6rem_1fr] gap-3 px-5 py-3"
                >
                  <time dateTime={commit.date} className="text-saffron">
                    {formatDate(commit.date)}
                  </time>
                  <span lang="en">{commit.message}</span>
                </li>
              ))}
            </ol>
          </div>
          <figcaption className="mt-3 text-sm text-muted">{e.logCaption}</figcaption>
        </figure>
      </article>

      <div className="mt-16 border-t border-line pt-10 md:mt-20">
        <h3 className="subheading text-3xl md:text-4xl">{e.educationTitle}</h3>
        <ol className="mt-6">
          {e.education.map((step) => (
            <li
              key={step.title}
              className="grid gap-1 border-b border-line py-5 md:grid-cols-[12rem_1fr] md:gap-8"
            >
              <p className="font-semibold text-brand">{step.period}</p>
              <div>
                <p className="text-lg font-semibold">{step.title}</p>
                <p className="text-muted">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
