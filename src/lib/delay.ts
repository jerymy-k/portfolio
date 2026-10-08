import type { CSSProperties } from 'react'

/** Inline style that sets the --delay used by the load animations in index.css. */
export function delay(ms: number): CSSProperties {
  return { '--delay': `${ms}ms` } as CSSProperties
}
