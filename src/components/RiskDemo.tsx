import { useId, useState } from 'react'
import { useLanguage } from '../i18n/useLanguage'
import { RISK_LEVELS, computeRisk } from '../lib/meteorisk'
import type { RiskInput, RiskLevel, WeatherCondition } from '../lib/meteorisk'

const LEVEL_COLOR: Record<RiskLevel, string> = {
  low: '#2e8b6e',
  moderate: '#a9a23a',
  high: '#e09a2b',
  very_high: '#d4622a',
  extreme: '#b3261e',
}

const PRESETS: Record<'calm' | 'heatwave' | 'storm', RiskInput> = {
  calm: { tempMax: 24, precipitation: 0, windSpeed: 12, windGusts: 22, condition: 'normal' },
  heatwave: { tempMax: 41, precipitation: 0, windSpeed: 24, windGusts: 38, condition: 'normal' },
  storm: { tempMax: 19, precipitation: 34, windSpeed: 46, windGusts: 74, condition: 'storm' },
}

/** First state shown: a rainy, breezy day that lands in the "high" band. */
const START: RiskInput = {
  tempMax: 33,
  precipitation: 12,
  windSpeed: 28,
  windGusts: 44,
  condition: 'normal',
}

const CONDITIONS: WeatherCondition[] = ['normal', 'fog', 'storm']

type SliderProps = {
  label: string
  unit: string
  min: number
  max: number
  value: number
  onChange: (value: number) => void
}

function Slider({ label, unit, min, max, value, onChange }: SliderProps) {
  const id = useId()
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="font-medium">
          {label}
        </label>
        <output htmlFor={id} className="tabular-nums text-muted">
          {value} {unit}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={1}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-1.5 w-full"
      />
    </div>
  )
}

/**
 * Live version of the MeteoRisk score. It runs the same rules as the Python
 * pipeline (see lib/meteorisk.ts), so visitors can test the logic themselves.
 */
export function RiskDemo() {
  const { t } = useLanguage()
  const r = t.risk
  const [input, setInput] = useState<RiskInput>(START)
  const conditionId = useId()

  const result = computeRisk(input)
  const set = (patch: Partial<RiskInput>) => setInput((previous) => ({ ...previous, ...patch }))
  const color = LEVEL_COLOR[result.level]

  return (
    <div className="rounded-xl border border-line bg-soft p-5 sm:p-7">
      <h4 className="subheading text-2xl">{r.title}</h4>
      <p className="mt-1.5 text-[0.95rem] text-muted">{r.caption}</p>

      <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
        <span className="text-muted">{r.presetsLabel}</span>
        {(Object.keys(PRESETS) as (keyof typeof PRESETS)[]).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setInput(PRESETS[key])}
            className="rounded-full border border-line bg-bg px-3.5 py-1.5 font-medium hover:border-brand"
          >
            {r.presets[key]}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
        <Slider
          label={r.tempMax}
          unit="°C"
          min={-5}
          max={48}
          value={input.tempMax}
          onChange={(tempMax) => set({ tempMax })}
        />
        <Slider
          label={r.precipitation}
          unit="mm"
          min={0}
          max={80}
          value={input.precipitation}
          onChange={(precipitation) => set({ precipitation })}
        />
        <Slider
          label={r.windSpeed}
          unit="km/h"
          min={0}
          max={100}
          value={input.windSpeed}
          onChange={(windSpeed) => set({ windSpeed })}
        />
        <Slider
          label={r.windGusts}
          unit="km/h"
          min={0}
          max={120}
          value={input.windGusts}
          onChange={(windGusts) => set({ windGusts })}
        />
        <div className="sm:col-span-2">
          <label htmlFor={conditionId} className="font-medium">
            {r.condition}
          </label>
          <select
            id={conditionId}
            value={input.condition}
            onChange={(event) => set({ condition: event.target.value as WeatherCondition })}
            className="mt-1.5 block w-full rounded-lg border border-line bg-bg px-3 py-2.5 sm:w-64"
          >
            {CONDITIONS.map((condition) => (
              <option key={condition} value={condition}>
                {r.conditions[condition]}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-7 border-t border-line pt-6" aria-live="polite">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
          <p>
            <span className="block text-sm text-muted">{r.result}</span>
            <span className="heading text-6xl tabular-nums">{result.score}</span>
            <span className="ml-2 text-muted">{r.outOf}</span>
          </p>
          <p className="flex items-center gap-2.5 text-xl font-semibold">
            <span
              className="size-3.5 rounded-full"
              style={{ backgroundColor: color }}
              aria-hidden="true"
            />
            {r.levels[result.level]}
          </p>
        </div>

        {/* Five 20-point bands; the marker sits at the score. */}
        <div className="relative mt-4" aria-hidden="true">
          <div className="flex h-2.5 gap-0.5 overflow-hidden rounded-full">
            {RISK_LEVELS.map((level) => (
              <span
                key={level}
                className="flex-1 transition-opacity duration-300"
                style={{
                  backgroundColor: LEVEL_COLOR[level],
                  opacity: level === result.level ? 1 : 0.28,
                }}
              />
            ))}
          </div>
          <span
            className="absolute -top-1 h-[1.125rem] w-1 -translate-x-1/2 rounded-full bg-ink transition-[left] duration-300"
            style={{ left: `${result.score}%` }}
          />
        </div>

        <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-4">
          {(
            [
              [r.components.temp, result.tempScore],
              [r.components.precip, result.precipScore],
              [r.components.wind, result.windScore],
              [r.components.floor, result.floor],
            ] as const
          ).map(([label, value]) => (
            <div key={label}>
              <dt className="text-muted">{label}</dt>
              <dd className="text-lg font-semibold tabular-nums">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-sm text-muted">{r.floorNote}</p>
      </div>
    </div>
  )
}
