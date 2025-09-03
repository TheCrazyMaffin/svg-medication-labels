import { Rgb } from '../types/label';
export declare function num(numberLike: unknown): number;
export declare function color(rgb?: Rgb, defaultColor?: string): string;
export declare function fraction(value: number, percent: number): number;
export declare function inRange(value: number, lower: number, upper: number): boolean;
