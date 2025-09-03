"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Renderer = void 0;
const svgdom_1 = require("svgdom");
const svg_js_1 = require("@svgdotjs/svg.js");
const helpers_1 = require("./helpers");
const _ = require("lodash");
const TextToSVG = require("text-to-svg");
const path = require("path");
const svgo_1 = require("svgo");
class Renderer {
    constructor(options) {
        this.markupRegex = /(<(?<tag>.*?)((>(?<text>.*?)<\/>)|\/>))|(?<text>.*?)(?=<|$)/g;
        this.edgeRadius = 20;
        this.height = 100;
        this.fillableColor = '#ECEFF1';
        this.options = options;
        this.width = 100 * options.aspectRatio;
        this.border = (0, helpers_1.fraction)(Math.min(this.width, this.height), 15);
        this.edgeRadius = options.edgeRadius ?? this.edgeRadius;
        const window = (0, svgdom_1.createSVGWindow)();
        const document = window.document;
        (0, svg_js_1.registerWindow)(window, document);
        let textToSVG;
        if (options.font === 'mono') {
            textToSVG = TextToSVG.loadSync(path.join(__dirname, '/../fonts/RobotoMono-Medium.ttf'));
        }
        else {
            textToSVG = TextToSVG.loadSync(path.join(__dirname, '/../fonts/RobotoCondensed-Medium.ttf'));
        }
        this.textToSVG = textToSVG;
        this.canvas = (0, svg_js_1.SVG)().size(this.width, this.height);
        this.label = this.canvas.group();
        const { width, height } = textToSVG.getMetrics('0');
        this.zero = { width, height };
    }
    export() {
        const clip = this.canvas
            .rect(this.width, this.height)
            .move(0, 0)
            .radius(this.edgeRadius);
        this.label.clipWith(clip);
        return (0, svgo_1.optimize)(this.canvas.svg()).data;
    }
    text(text, defaultColor) {
        const textGroup = this.label.group().fill(defaultColor);
        let cursor = 0;
        const emptyTags = {
            var: () => {
                textGroup
                    .rect(this.zero.width * 5, this.zero.height * 0.75)
                    .fill(this.fillableColor)
                    .x(cursor)
                    .y(-this.zero.height * 0.6);
                cursor += this.zero.width * 5;
            },
            check: () => {
                textGroup
                    .rect(this.zero.width, this.zero.width)
                    .stroke({ color: defaultColor, width: this.zero.width * 0.15 })
                    .fill(this.fillableColor)
                    .x(cursor)
                    .y(-this.zero.height * 0.5);
                cursor += this.zero.width;
            }
        };
        const textTags = {
            bold: (path) => {
                path.stroke({ width: this.border / 5, color: path.fill() });
            },
            large: (path) => {
                path.scale(1.3);
            },
            small: (path) => {
                path.opacity(0.7);
            }
        };
        _.forEach(Array.from(text.matchAll(this.markupRegex)), (block) => {
            const tag = block.groups?.tag;
            const text = block.groups?.text;
            if (tag !== undefined && text === undefined) {
                if (emptyTags[tag] !== undefined) {
                    emptyTags[tag]();
                }
                else {
                    console.warn(`Found unknown tag: "${tag}". Ignoring.`);
                }
            }
            else if (text !== undefined) {
                if (text.startsWith(' ')) {
                    cursor += this.zero.width;
                }
                else {
                    cursor += this.zero.width * 0.2;
                }
                const textPath = textGroup.path(this.textToSVG.getD(text)).x(cursor);
                if (tag !== undefined) {
                    const tags = tag.split(',');
                    _.forEach(tags, tag => {
                        if (tag.startsWith('#')) {
                            textPath.fill(tag);
                        }
                        else if (textTags[tag] !== undefined) {
                            textTags[tag](textPath);
                        }
                    });
                }
                cursor += (0, helpers_1.num)(textPath.width());
                if (text.endsWith(' ') && text.length > 1) {
                    cursor += this.zero.width;
                }
            }
        });
        return textGroup;
    }
    concatText(...blocks) {
        const concatGroup = this.label.group();
        let cursor = 0;
        _.forEach(blocks, block => {
            block.x(cursor).addTo(concatGroup);
            cursor += (0, helpers_1.num)(block.width()) + this.zero.width;
        });
        return concatGroup;
    }
    /**
     * @returns number Distance from each edge to center element
     */
    center(total, element) {
        return (total - element) / 2;
    }
    layoutText(blocks, options, callback) {
        const group = this.fitGroup(this.concatText(...blocks), options.height, options.width);
        group.move(options.x, options.y);
        if (callback !== undefined) {
            callback(group);
        }
        return group;
    }
    fitGroup(group, height, width) {
        group.size(undefined, height);
        if ((0, helpers_1.num)(group.width()) > width) {
            group.width(width);
        }
        return group;
    }
    background(type, colors) {
        const background = this.label.group();
        const plain = () => {
            return background
                .rect(this.width, this.height)
                .fill(colors[0] ?? '#FFF');
        };
        const borderSolid = () => {
            plain();
            background
                .rect(this.width - this.border * 1.5, this.height - this.border * 1.5)
                .radius(this.edgeRadius - this.border * 0.5)
                .fill(colors[1] ?? '#FFF')
                .move(this.border * 0.75, this.border * 0.75);
        };
        const twoColorsHorizontal = () => {
            plain();
            background
                .rect(this.width, this.height / 2)
                .move(0, this.height / 2)
                .fill(colors[1] ?? '#fff');
        };
        const twoColorsDiagonal = () => {
            plain();
            background
                .polygon(`0,${this.height} ${this.width},${this.height} ${this.width},0`)
                .fill(colors[1] ?? '#fff');
        };
        const borderHattched = () => {
            plain().fill(colors[1] ?? '#fff');
            const s /* ...tep or ...top */ = this.border * 0.5;
            const pattern = background.pattern(4 * s, 4 * s, add => {
                // Top left
                add.polygon(`0,0 ${1 * s},0 0,${1 * s}`);
                // Bottom right
                add.polygon(`${4 * s},${4 * s} ${3 * s},${4 * s} ${4 * s},${3 * s}`);
                // Middle
                add.polygon(`0,${3 * s} 0,${4 * s} ${1 * s},${4 * s} ${4 * s},${1 * s} ${4 * s},0 ${3 * s},0`);
            }).fill(colors[0] ?? '#000');
            plain().fill(pattern);
            background
                .rect(this.width - this.border * 1.5, this.height - this.border * 1.5)
                .radius(this.edgeRadius - this.border * 0.5)
                .fill(colors[1] ?? '#FFF')
                .move(this.border * 0.75, this.border * 0.75);
        };
        const fn = {
            plain,
            'border-solid': borderSolid,
            'two-colors-horizontal': twoColorsHorizontal,
            'two-colors-diagonal': twoColorsDiagonal,
            'border-hattched': borderHattched
        };
        if (fn[type] !== undefined) {
            fn[type]();
            return background;
        }
        else {
            throw new Error(`Could not find border type "${type}"`);
        }
    }
}
exports.Renderer = Renderer;
