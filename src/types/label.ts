import { SelectedVariation } from "./medication"

  /**
   * `0` - `255`
   * (not enforced)
  */
export type RgbValue = number
export type Rgb = [RgbValue, RgbValue, RgbValue]
export type Hex = `#${string}`

  /**
   * Markdown formatting can be used here
   * with the following **custom functionality:**
   *
   * ---
   *
   * `[Red elephant](red)`
   *
   * Results in the text "Red elephant" being
   * wrapped by a element with the class "red",
   * which can then be referenced with the
   * `.red` style selector
   */
export type formatString = string

export interface Style {
    background: {
      type: 'plain' | 'two-colors-horizontal' | 'two-colors-diagonal' | 'border-hattched' | 'border-solid'
      colors: Hex[]
    }
    name: Hex
    dose: Hex
    unit: Hex
  }

  /**
   * - **Small** for 2 - 20 ml syringes
   * - **Large** for 50 ml syringes
   * - **Plus** for indicating a medication has been added
   * - **Line** for syringe pump lines
   */
export type Type = 'small' | 'large' | 'plus' | 'line'

export interface RenderOptions {
    /**
       * **Width / Height** as float
       * - `4:3` = `1.333` (Divide 4 by 3)
       * - `1920 px : 1080 px` = `1.777` (Divide 1920 by 1080)
       *
       * This can then be scaled to fit all sizes within that aspect ratio.
       */
    aspectRatio: number
    /**
       * `0` - `100`
       * Percent of height
       */
    edgeRadius?: number
    /**
     * Default is sans-serif as required by norm
     * If you feel mono is more fittable you may
     * switch to that here.
     */
    font?: 'sans-serif' | 'mono'
  }

export type Options = RenderOptions & SelectedVariation
