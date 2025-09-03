import '@svgdotjs/svg.topath.js'
import { applyVariation } from './medication'
import { inRange, num } from './helpers'
import { Renderer } from './renderer'
import { Options, RenderOptions } from '../types/label'
import { Substance } from '../types/medication'

  /**
   * @returns The generated SVG
   */
  function render
  (
    renderOptions: RenderOptions,
    medication: Substance,
    variationIndex: number
  ): string {
    if (medication.variations[variationIndex] === undefined) {
      throw new Error(`Variation with index ${variationIndex} does not exist for ${medication.name}`)
    }

    const options: Options = {
      ...renderOptions,
      ...applyVariation(medication, medication.variations[variationIndex])
    }

    const renderer = new Renderer(options)

    const small = options.labelType === 'small'
    const large = options.labelType === 'large'
    const plus = options.labelType === 'plus'
    const line = options.labelType === 'line'

    if (small) {
      if(!inRange(options.aspectRatio, 1.6, 4)){
        console.warn("Seitenverhältnis ist nicht innerhalb der empfohlenen Werte. Ergebnis kann unerwartet verändert aussehen.")
      }
      renderer.background(options.style.background.type, options.style.background.colors)
      const lineSeparation = renderer.border / 4
      const lineHeight = (renderer.height - renderer.border * 2 - lineSeparation) / 2

      const name = renderer.text(options.name, options.style.name)
      const nameGroup = renderer.fitGroup(
        renderer.concatText(name),
        lineHeight,
        renderer.width - renderer.border * 2
      )
      nameGroup.move((renderer.width - num(nameGroup.width())) / 2, renderer.border)

      const blocks = []
      if (options.dose !== undefined) {
        blocks.push(renderer.text(options.dose, options.style.dose))
      }
      if (options.unit !== undefined) {
        blocks.push(renderer.text(options.unit, options.style.unit))
      }
      const amount = renderer.fitGroup(
        renderer.concatText(...blocks),
        lineHeight,
        renderer.width - renderer.border * 2
      )
      amount.move((renderer.width - num(amount.width())) / 2, renderer.height * 0.5 + lineSeparation * 0.5)
    } else if (line) {
      if(!inRange(options.aspectRatio, 3.3, 8)){
        console.warn("Seitenverhältnis ist nicht innerhalb der empfohlenen Werte. Ergebnis kann unerwartet verändert aussehen.")
      }
      renderer.background('plain', ['#fff'])
      renderer.width *= 0.6
      renderer.background(options.style.background.type, options.style.background.colors)
      renderer.width *= 1 / 0.6
      renderer.canvas
        .line(`${renderer.width * 0.5},0 ${renderer.width * 0.5},${renderer.height}`)
        .stroke({
          color: '#000',
          dasharray: `${renderer.border / 2} ${renderer.border}`,
          width: renderer.border / 5
        })
      const name = renderer.text(options.name, options.style.name)
      const nameGroup = renderer.fitGroup(
        renderer.concatText(name),
        renderer.height / 2,
        renderer.width * 0.5 - renderer.border * 2
      )
      nameGroup.move(renderer.border, renderer.height * 0.25)
    } else if (plus || large) {
      if(!inRange(options.aspectRatio, 1.5, 2.6)){
        console.warn("Seitenverhältnis ist nicht innerhalb der empfohlenen Werte. Ergebnis kann unerwartet verändert aussehen.")
      }
      const h = renderer.height
      renderer.border *= 0.5
      renderer.background('plain', ['#fff'])
      if (options.style.background.type === 'two-colors-horizontal') {
        renderer.background('plain', [options.style.background.colors[1] ?? '#fff'])
        renderer.height *= 2 / 3
      }
      if (options.style.background.type === 'two-colors-diagonal') {
        renderer.height *= 1 / 3
      }
      renderer.background(options.style.background.type, options.style.background.colors)
      renderer.height = h
      if (options.style.background.type === 'border-hattched') {
        renderer
          .background('plain', [options.style.background.colors[1] ?? '#FFF'])
          .width(renderer.width - renderer.border * 2)
          .dx(renderer.border)
          .dy(renderer.border + renderer.edgeRadius)
      }

      if (plus) {
        const name = renderer.text(options.name, options.style.name)
        const nameGroup = renderer.fitGroup(
          renderer.concatText(name),
          renderer.height * 1 / 3 - renderer.border * 2,
          renderer.width - renderer.border * 4
        )
        nameGroup.move(renderer.width - num(nameGroup.width()) - renderer.border * 2, renderer.border)

        const plus = renderer.text('PLUS', '#000')
        const plusGroup = renderer.fitGroup(
          renderer.concatText(plus),
          (renderer.height - renderer.border * 2) * 1 / 2,
          (renderer.width - renderer.border * 2) * 0.3
        )
        plusGroup.move(renderer.border, renderer.height - num(plusGroup.height()) - renderer.border * 2)

        if (options.amount !== undefined) {
          const unit = renderer.text(options.amount, '#000')
          const unitGroup = renderer.fitGroup(
            renderer.concatText(unit),
            (renderer.height - renderer.border * 2) * 1 / 4,
            (renderer.width - renderer.border * 2) * 0.65
          )
          unitGroup.move(renderer.width - num(unitGroup.width()) - renderer.border, renderer.height - num(unitGroup.height()) - renderer.border * 2)
        }
      } else if (large) {
        const blocks = []
        blocks.push(renderer.text(options.name, options.style.name))
        if (options.dose !== undefined) {
          blocks.push(renderer.text(options.dose, options.style.unit))
        }
        renderer.layoutText(blocks,
          {
            width: renderer.width - renderer.border * 4,
            height: renderer.height * 1 / 3 - renderer.border * 2,
            x: renderer.border * 2,
            y: renderer.border
          }, (title) => {
            title.x(renderer.center(renderer.width, num(title.width())))
          })

        renderer.layoutText([renderer.text('Herstellung', '#000')], {
          width: renderer.width * 0.5 - renderer.border * 2,
          height: renderer.height * 0.1,
          x: 0,
          y: renderer.height * 0.4
        }, (text) => {
          text.x(renderer.width - num(text.width()) - renderer.border)
        })
        renderer.layoutText([
          renderer.text('Datum, Uhrzeit, Hz', '#000')
        ], {
          width: renderer.width * 0.5 - renderer.border * 2,
          height: renderer.height * 0.08,
          x: 0,
          y: renderer.height * 0.92 - renderer.border
        }, (text) => {
          text
            .x(renderer.width - renderer.border * 2 - num(text.width()))
        })
        renderer.canvas
          .line(
            renderer.width * 0.5,
            renderer.height * 0.92 - renderer.border * 1.5,
            renderer.width - renderer.border,
            renderer.height * 0.92 - renderer.border * 1.5
          )
          .stroke({ color: renderer.fillableColor, width: renderer.border * 0.25, dasharray: `${renderer.border * 0.5} ${renderer.border * 0.25}` })

        if (options.amount !== undefined) {
          renderer.layoutText([
            renderer.text(options.amount, '#000')
          ], {
            width: renderer.width * 0.5 - renderer.border * 2,
            height: renderer.height * 0.1,
            x: renderer.border,
            y: renderer.height * 0.4
          })
        }
        if (options.solvent !== undefined) {
          renderer.layoutText([
            renderer.text(`mit ${options.solvent}`, '#000')
          ], {
            width: renderer.width * 0.5 - renderer.border * 2,
            height: renderer.height * 0.1,
            x: renderer.border,
            y: renderer.height * 0.53
          })
        }
        if (options.volume !== undefined) {
          renderer.layoutText([
            renderer.text(`Insgesamt ${options.volume}`, '#000')
          ], {
            width: renderer.width * 0.5 - renderer.border * 2,
            height: renderer.height * 0.1,
            x: renderer.border,
            y: renderer.height * 0.66
          })
        }
        if (options.note !== undefined) {
          renderer.layoutText([
            renderer.text(options.note, '#000')
          ], {
            width: renderer.width * 0.5 - renderer.border * 2,
            height: renderer.height * 0.1,
            x: renderer.border,
            y: renderer.height * 0.79
          })
        }
      }
    }

    return renderer.export()
  }

  export {
    render
  }