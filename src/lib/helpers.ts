import { isFinite } from 'lodash'
import { Color } from '@svgdotjs/svg.js'
import { Rgb } from '../types/label'

export function num (numberLike: unknown): number {
  if (isFinite(numberLike)) {
    return numberLike as number
  } else {
    throw new Error('Num wasnt passed a number.')
  }
}

export function color (rgb?: Rgb, defaultColor = '#000'): string {
  if (rgb !== undefined) {
    return new Color(...rgb, 'rgb').toHex()
  } else {
    return new Color(defaultColor).toHex()
  }
}

export function fraction (value: number, percent: number): number {
  return value * (percent / 100)
}

export function inRange (value: number, lower: number, upper: number): boolean {
  return value >= lower && upper >= value
}
