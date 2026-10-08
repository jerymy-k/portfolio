import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  intro?: string
  tone?: 'plain' | 'soft'
  children: ReactNode
}

/** A page section with its heading. `tone` alternates the background. */
export function Section({ id, title, intro, tone = 'plain', children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={tone === 'soft' ? 'bg-soft' : 'bg-bg'}
    >
      <div className="mx-auto max-w-[1280px] px-5 py-20 md:px-10 md:py-28">
        <h2 id={`${id}-title`} className="heading text-[clamp(2.75rem,7vw,5.25rem)] text-brand">
          {title}
        </h2>
        {intro && <p className="mt-4 max-w-[38rem] text-lg text-muted">{intro}</p>}
        <div className="mt-10 md:mt-14">{children}</div>
      </div>
    </section>
  )
}
