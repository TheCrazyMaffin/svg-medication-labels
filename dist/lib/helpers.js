"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.num = num;
exports.color = color;
exports.fraction = fraction;
exports.inRange = inRange;
const lodash_1 = require("lodash");
const svg_js_1 = require("@svgdotjs/svg.js");
function num(numberLike) {
    if ((0, lodash_1.isFinite)(numberLike)) {
        return numberLike;
    }
    else {
        throw new Error('Num wasnt passed a number.');
    }
}
function color(rgb, defaultColor = '#000') {
    if (rgb !== undefined) {
        return new svg_js_1.Color(...rgb, 'rgb').toHex();
    }
    else {
        return new svg_js_1.Color(defaultColor).toHex();
    }
}
function fraction(value, percent) {
    return value * (percent / 100);
}
function inRange(value, lower, upper) {
    return value >= lower && upper >= value;
}
