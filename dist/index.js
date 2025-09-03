"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = exports.medicationGroups = exports.medications = void 0;
const medication_1 = require("./data/medication");
Object.defineProperty(exports, "medications", { enumerable: true, get: function () { return medication_1.medications; } });
const medicationGroups_1 = require("./data/medicationGroups");
Object.defineProperty(exports, "medicationGroups", { enumerable: true, get: function () { return medicationGroups_1.medicationGroups; } });
const label_1 = require("./lib/label");
Object.defineProperty(exports, "render", { enumerable: true, get: function () { return label_1.render; } });
