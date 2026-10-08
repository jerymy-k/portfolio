import { useLanguage } from '../i18n/useLanguage'
import { Section } from './Section'

export function About() {
  const { t } = useLanguage()

  return (
    <Section id="about" title={t.about.title}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="subheading text-[clamp(1.6rem,3.2vw,2.35rem)] leading-[1.18]">
            {t.about.lead}
          </p>
          <p className="mt-6 max-w-[40rem] text-lg text-muted">{t.about.body}</p>
        </div>

        <dl className="self-start border-t border-line lg:col-span-5">
          {t.about.facts.map((fact) => (
            <div
              key={fact.label}
              className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-line py-4"
            >
              <dt className="font-semibold text-brand">{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
