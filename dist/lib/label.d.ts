import '@svgdotjs/svg.topath.js';
import { RenderOptions } from '../types/label';
import { Substance } from '../types/medication';
/**
 * @returns The generated SVG
 */
declare function render(renderOptions: RenderOptions, medication: Substance, variationIndex: number): string;
export { render };
