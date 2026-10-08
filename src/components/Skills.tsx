import { useLanguage } from '../i18n/useLanguage'
import { Section } from './Section'

export function Skills() {
  const { t } = useLanguage()

  return (
    <Section id="skills" title={t.skills.title} intro={t.skills.intro} tone="soft">
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {t.skills.groups.map((group) => (
          <div key={group.name} className="border-t-2 border-brand pt-4">
            <h3 className="subheading text-2xl">{group.name}</h3>
            <ul className="mt-3 space-y-1 text-lg text-muted">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
