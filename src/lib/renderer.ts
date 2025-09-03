import { createSVGWindow } from 'svgdom'
import { registerWindow, SVG, Path, G } from '@svgdotjs/svg.js'
import { fraction, num } from './helpers'
import * as _ from 'lodash'
import * as TextToSVG from 'text-to-svg'
import { Hex, Options, Style } from '../types/label'
import * as path from 'path'
import { optimize } from 'svgo'

export class Renderer {
  markupRegex = /(<(?<tag>.*?)((>(?<text>.*?)<\/>)|\/>))|(?<text>.*?)(?=<|$)/g
  edgeRadius = 20
  height = 100
  fillableColor = '#ECEFF1'
  width
  border
  canvas
  label
  zero
  textToSVG
  options

  constructor (options: Options) {
    this.options = options
    this.width = 100 * options.aspectRatio
    this.border = fraction(Math.min(this.width, this.height), 15)
    this.edgeRadius = options.edgeRadius ?? this.edgeRadius
    const window = createSVGWindow()
    const document = window.document
    registerWindow(window, document)

    let textToSVG: ReturnType<typeof TextToSVG["loadSync"]>
    if (options.font === 'mono') {
      textToSVG = TextToSVG.loadSync(path.join(__dirname, '/../fonts/RobotoMono-Medium.ttf'))
    } else {
      textToSVG = TextToSVG.loadSync(path.join(__dirname, '/../fonts/RobotoCondensed-Medium.ttf'))
    }
    this.textToSVG = textToSVG
    this.canvas = SVG().size(this.width, this.height)
    this.label = this.canvas.group()
    const { width, height } = textToSVG.getMetrics('0')
    this.zero = { width, height }
  }

  export () {
    const clip = this.canvas
      .rect(this.width, this.height)
      .move(0, 0)
      .radius(this.edgeRadius)
    this.label.clipWith(clip)
    
    return optimize(this.canvas.svg()).data
  }

  text (text: string, defaultColor: Hex) {
    const textGroup = this.label.group().fill(defaultColor)
    let cursor = 0
    const emptyTags: Record<string, () => void> = {
      var: () => {
        textGroup
          .rect(this.zero.width * 5, this.zero.height * 0.75)
          .fill(this.fillableColor)
          .x(cursor)
          .y(-this.zero.height * 0.6)
        cursor += this.zero.width * 5
      },
      check: () => {
        textGroup
          .rect(this.zero.width, this.zero.width)
          .stroke({ color: defaultColor, width: this.zero.width * 0.15 })
          .fill(this.fillableColor)
          .x(cursor)
          .y(-this.zero.height * 0.5)
        cursor += this.zero.width
      }
    }
    const textTags: Record<string, (path: Path) => void> = {
      bold: (path) => {
        path.stroke({ width: this.border / 5, color: path.fill() })
      },
      large: (path) => {
        path.scale(1.3)
      },
      small: (path) => {
        path.opacity(0.7)
      }
    }
    _.forEach(Array.from(text.matchAll(this.markupRegex)), (block) => {
      const tag = block.groups?.tag
      const text = block.groups?.text
      if (tag !== undefined && text === undefined) {
        if (emptyTags[tag] !== undefined) {
          emptyTags[tag]()
        } else {
          console.warn(`Found unknown tag: "${tag}". Ignoring.`)
        }
      } else if (text !== undefined) {
        if (text.startsWith(' ')) {
          cursor += this.zero.width
        } else {
          cursor += this.zero.width * 0.2
        }
        const textPath = textGroup.path(this.textToSVG.getD(text)).x(cursor)
        if (tag !== undefined) {
          const tags = tag.split(',')
          _.forEach(tags, tag => {
            if (tag.startsWith('#')) {
              textPath.fill(tag)
            } else if (textTags[tag] !== undefined) {
              textTags[tag](textPath)
            }
          })
        }
        cursor += num(textPath.width())
        if (text.endsWith(' ') && text.length > 1) {
          cursor += this.zero.width
        }
      }
    })
    return textGroup
  }

  concatText (...blocks: ReturnType<typeof this.text>[]) {
    const concatGroup = this.label.group()
    let cursor = 0
    _.forEach(blocks, block => {
      block.x(cursor).addTo(concatGroup)
      cursor += num(block.width()) + this.zero.width
    })
    return concatGroup
  }

  /**
   * @returns number Distance from each edge to center element
   */
  center (total: number, element: number) {
    return (total - element) / 2
  }

  layoutText (
    blocks: Parameters<typeof this.concatText>,
    options: {
      width: number
      height: number
      x: number
      y: number
    },
    callback?: (text: G) => void
  ) {
    const group = this.fitGroup(
      this.concatText(...blocks),
      options.height,
      options.width
    )
    group.move(options.x, options.y)
    if (callback !== undefined) {
      callback(group)
    }
    return group
  }

  fitGroup (group: G, height: number, width: number) {
    group.size(undefined, height)
    if (num(group.width()) > width) {
      group.width(width)
    }
    return group
  }

  background (type: Style['background']['type'], colors: Style['background']['colors']) {
    const background = this.label.group()
    const plain = () => {
      return background
        .rect(this.width, this.height)
        .fill(colors[0] ?? '#FFF')
    }
    const borderSolid = () => {
      plain()
      background
        .rect(this.width - this.border * 1.5, this.height - this.border * 1.5)
        .radius(this.edgeRadius - this.border * 0.5)
        .fill(colors[1] ?? '#FFF')
        .move(this.border * 0.75, this.border * 0.75)
    }
    const twoColorsHorizontal = () => {
      plain()
      background
        .rect(this.width, this.height / 2)
        .move(0, this.height / 2)
        .fill(colors[1] ?? '#fff')
    }
    const twoColorsDiagonal = () => {
      plain()
      background
        .polygon(`0,${this.height} ${this.width},${this.height} ${this.width},0`)
        .fill(colors[1] ?? '#fff')
    }
    const borderHattched = () => {
      plain().fill(colors[1] ?? '#fff')

      const s/* ...tep or ...top */ = this.border * 0.5
      const pattern = background.pattern(4 * s, 4 * s, add => {
        // Top left
        add.polygon(`0,0 ${1 * s},0 0,${1 * s}`)
        // Bottom right
        add.polygon(`${4 * s},${4 * s} ${3 * s},${4 * s} ${4 * s},${3 * s}`)
        // Middle
        add.polygon(`0,${3 * s} 0,${4 * s} ${1 * s},${4 * s} ${4 * s},${1 * s} ${4 * s},0 ${3 * s},0`)
      }).fill(colors[0] ?? '#000')
      plain().fill(pattern)
      background
        .rect(this.width - this.border * 1.5, this.height - this.border * 1.5)
        .radius(this.edgeRadius - this.border * 0.5)
        .fill(colors[1] ?? '#FFF')
        .move(this.border * 0.75, this.border * 0.75)
    }
    const fn: Record<string, () => void> = {
      plain,
      'border-solid': borderSolid,
      'two-colors-horizontal': twoColorsHorizontal,
      'two-colors-diagonal': twoColorsDiagonal,
      'border-hattched': borderHattched
    }
    if (fn[type] !== undefined) {
      fn[type]()
      return background
    } else {
      throw new Error(`Could not find border type "${type}"`)
    }
  }
}
