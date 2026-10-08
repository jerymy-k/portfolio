/**
 * Weather risk score, ported from my MeteoRisk pipeline
 * (transformation/feature_engineering.py in github.com/jerymy-k/MeteoRisk).
 *
 * Each bin is [lower, upper): the lower edge is included, the upper one is not,
 * exactly like `pd.cut(..., right=False)` in the Python version.
 */

export type WeatherCondition = 'normal' | 'fog' | 'storm'

export type RiskInput = {
  /** Daily maximum temperature, °C */
  tempMax: number
  /** Daily precipitation, mm */
  precipitation: number
  /** Maximum wind speed, km/h */
  windSpeed: number
  /** Maximum wind gusts, km/h */
  windGusts: number
  /** Fog = WMO weather codes 45/48, storm = 95/96/99 */
  condition: WeatherCondition
}

export const RISK_LEVELS = ['low', 'moderate', 'high', 'very_high', 'extreme'] as const
export type RiskLevel = (typeof RISK_LEVELS)[number]

export type RiskResult = {
  tempScore: number
  precipScore: number
  windScore: number
  /** Minimum score forced by dangerous conditions (0, 60 or 90) */
  floor: number
  score: number
  level: RiskLevel
}

/** Returns the score of the bin that contains `value`. `edges` are the inner bin limits. */
function bin(value: number, edges: number[], scores: number[]): number {
  let i = 0
  while (i < edges.length && value >= edges[i]) i++
  return scores[i]
}

export function tempScore(tempMax: number): number {
  return bin(tempMax, [10, 15, 18, 30, 32, 36, 38, 40], [100, 70, 40, 0, 20, 40, 70, 90, 100])
}

export function precipScore(mm: number): number {
  return bin(mm, [1, 5, 10, 20, 50], [0, 20, 40, 60, 80, 100])
}

export function windScore(speed: number, gusts: number): number {
  const steps = [0, 20, 40, 60, 80, 100]
  return Math.max(bin(speed, [20, 30, 40, 50, 70], steps), bin(gusts, [30, 40, 50, 60, 80], steps))
}

export function riskLevel(score: number): RiskLevel {
  return RISK_LEVELS[bin(score, [20, 40, 60, 80], [0, 1, 2, 3, 4])]
}

export function computeRisk(input: RiskInput): RiskResult {
  const t = tempScore(input.tempMax)
  const p = precipScore(input.precipitation)
  const w = windScore(input.windSpeed, input.windGusts)

  const extreme = input.precipitation > 50 || input.windGusts > 70 || input.condition === 'storm'
  const high = input.precipitation > 20 || input.windGusts > 50 || input.condition === 'fog'
  const floor = extreme ? 90 : high ? 60 : 0

  // Precipitation weighs the most: it disrupts deliveries most directly.
  const weighted = 0.3 * t + 0.4 * p + 0.3 * w
  const score = Math.round(Math.max(weighted, floor))

  return { tempScore: t, precipScore: p, windScore: w, floor, score, level: riskLevel(score) }
}
