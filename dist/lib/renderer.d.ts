import { G } from '@svgdotjs/svg.js';
import * as TextToSVG from 'text-to-svg';
import { Hex, Options, Style } from '../types/label';
export declare class Renderer {
    markupRegex: RegExp;
    edgeRadius: number;
    height: number;
    fillableColor: string;
    width: number;
    border: number;
    canvas: import("@svgdotjs/svg.js").Svg;
    label: G;
    zero: {
        width: number;
        height: number;
    };
    textToSVG: TextToSVG;
    options: Options;
    constructor(options: Options);
    export(): string;
    text(text: string, defaultColor: Hex): G;
    concatText(...blocks: ReturnType<typeof this.text>[]): G;
    /**
     * @returns number Distance from each edge to center element
     */
    center(total: number, element: number): number;
    layoutText(blocks: Parameters<typeof this.concatText>, options: {
        width: number;
        height: number;
        x: number;
        y: number;
    }, callback?: (text: G) => void): G;
    fitGroup(group: G, height: number, width: number): G;
    background(type: Style['background']['type'], colors: Style['background']['colors']): G;
}
