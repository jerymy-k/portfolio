import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import type { ReactNode } from 'react'
import deliveryEta from '../assets/deliveryeta-precision.webp'
import eduHub from '../assets/eduhub-dashboard.webp'
import type { Project, ProjectKind } from '../data/content'
import { useLanguage } from '../i18n/useLanguage'
import { GitHubIcon } from './BrandIcons'
import { RiskDemo } from './RiskDemo'
import { Section } from './Section'

type Filter = 'all' | ProjectKind
const FILTERS: Filter[] = ['all', 'ai', 'web']

function ProjectLinks({ project }: { project: Project }) {
  const { t } = useLanguage()
  const linkClass =
    'inline-flex items-center gap-2 font-semibold text-brand underline decoration-line decoration-2 underline-offset-[6px] hover:decoration-saffron'

  return (
    <p className="flex flex-wrap gap-x-7 gap-y-2">
      <a href={project.repo} target="_blank" rel="noreferrer" className={linkClass}>
        <GitHubIcon className="size-[1.1em]" />
        {t.projects.code}
        <span className="sr-only"> — {project.name}</span>
      </a>
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noreferrer" className={linkClass}>
          <ArrowUpRight className="size-[1.15em]" aria-hidden="true" />
          {t.projects.demo}
          <span className="sr-only"> — {project.name}</span>
        </a>
      )}
    </p>
  )
}

function Screenshot({ src, alt, caption, width, height }: {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}) {
  return (
    <figure>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className="w-full rounded-xl border border-line"
      />
      <figcaption className="mt-3 text-sm text-muted">{caption}</figcaption>
    </figure>
  )
}

/** SI-PRD: the chain really is a sequence, so it is shown as numbered steps. */
function Pipeline() {
  const { t } = useLanguage()
  const { steps, caption } = t.projects.pipeline

  return (
    <figure className="rounded-xl border border-line bg-soft p-5 sm:p-7">
      <ol>
        {steps.map((step, index) => (
          <li key={step.name} className="grid grid-cols-[2.25rem_1fr] gap-x-4">
            <div className="flex flex-col items-center">
              <span className="grid size-9 place-items-center rounded-full bg-brand text-sm font-bold text-on-brand tabular-nums">
                {index + 1}
              </span>
              {index < steps.length - 1 && <span className="w-px flex-1 bg-line" aria-hidden="true" />}
            </div>
            <p className={index < steps.length - 1 ? 'pb-5 pt-1' : 'pt-1'}>
              <span className="font-semibold">{step.name}</span>
              <span className="block text-[0.95rem] text-muted">{step.detail}</span>
            </p>
          </li>
        ))}
      </ol>
      <figcaption className="mt-5 text-sm text-muted">{caption}</figcaption>
    </figure>
  )
}

function Featured({ project, visual }: { project: Project; visual: ReactNode }) {
  const { t, lang } = useLanguage()
  const colon = lang === 'fr' ? '\u00a0: ' : ': '

  return (
    <article className="grid gap-9 border-t border-line py-12 md:py-16 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-5">
        <p className="text-muted">
          {t.projects.kinds[project.kind]}, {project.date.toLowerCase()}
        </p>
        <h3 className="heading mt-2 text-[clamp(2.6rem,5vw,4rem)]">{project.name}</h3>
        <p className="subheading mt-2 text-xl text-brand md:text-2xl">{project.tagline}</p>

        <p className="mt-5">{project.description}</p>

        {project.metrics && (
          <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-5">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col-reverse">
                <dt className="max-w-[12rem] text-sm leading-snug text-muted">{metric.label}</dt>
                <dd className="heading text-5xl tabular-nums">{metric.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <p className="mt-7 text-muted">
          <span className="font-semibold text-ink">
            {t.projects.stackLabel}
            {colon}
          </span>
          {project.stack.join(', ')}
        </p>

        <div className="mt-6">
          <ProjectLinks project={project} />
        </div>
      </div>

      <div className="lg:col-span-7">{visual}</div>
    </article>
  )
}

export function Projects() {
  const { t } = useLanguage()
  const p = t.projects
  const [filter, setFilter] = useState<Filter>('all')

  const visible = (project: Project) => filter === 'all' || project.kind === filter
  const featured = p.featured.filter(visible)
  const more = p.more.filter(visible)

  const visuals: Record<string, ReactNode> = {
    'si-prd': <Pipeline />,
    meteorisk: <RiskDemo />,
    deliveryeta: (
      <Screenshot
        src={deliveryEta}
        alt={p.figures.deliveryetaAlt}
        caption={p.figures.deliveryeta}
        width={1003}
        height={966}
      />
    ),
    eduhub: (
      <Screenshot
        src={eduHub}
        alt={p.figures.eduhubAlt}
        caption={p.figures.eduhub}
        width={1600}
        height={778}
      />
    ),
  }

  return (
    <Section id="projects" title={p.title} intro={p.intro}>
      <div role="group" aria-label={p.filterLabel} className="flex flex-wrap gap-2">
        {FILTERS.map((key) => {
          const active = key === filter
          return (
            <button
              key={key}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(key)}
              className={`rounded-full border px-5 py-2 font-semibold transition-colors ${
                active
                  ? 'border-brand bg-brand text-on-brand'
                  : 'border-line hover:border-brand'
              }`}
            >
              {p.filters[key]}
            </button>
          )
        })}
      </div>

      <div className="mt-10">
        {featured.map((project) => (
          <Featured key={project.id} project={project} visual={visuals[project.id]} />
        ))}
      </div>

      {more.length > 0 && (
        <div className="border-t border-line pt-12 md:pt-16">
          <h3 className="subheading text-3xl md:text-4xl">{p.moreTitle}</h3>
          <ul className="mt-6">
            {more.map((project) => (
              <li
                key={project.id}
                className="grid gap-x-10 gap-y-3 border-b border-line py-7 lg:grid-cols-12"
              >
                <div className="lg:col-span-3">
                  <h4 className="subheading text-2xl">{project.name}</h4>
                  <p className="text-brand">{project.tagline}</p>
                </div>
                <div className="lg:col-span-6">
                  <p>{project.description}</p>
                  <p className="mt-2 text-muted">{project.stack.join(', ')}</p>
                </div>
                <div className="lg:col-span-3 lg:justify-self-end">
                  <ProjectLinks project={project} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  )
}
