import { formatString, Style } from "./label";
export interface Group {
    name: string;
    style: Style;
}
export interface VariationSmall {
    name?: formatString;
    dose?: formatString;
    unit?: formatString;
    labelType: 'small';
}
export interface VariationLine {
    name?: formatString;
    labelType: 'line';
}
export interface VariationPlus {
    name?: formatString;
    amount: formatString;
    labelType: 'plus';
}
export interface VariationLarge {
    name?: formatString;
    dose?: formatString;
    amount?: formatString;
    solvent?: formatString;
    volume?: formatString;
    note?: formatString;
    labelType: 'large';
}
export type Variation = VariationSmall | VariationLine | VariationPlus | VariationLarge;
export interface Substance {
    name: formatString;
    style?: Partial<Style>;
    group: string;
    variations: Variation[];
}
export type SelectedVariation = {
    name: formatString;
    group: string;
    style: Style;
} & Variation;
