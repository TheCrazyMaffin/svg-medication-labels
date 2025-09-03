"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyVariation = applyVariation;
const _ = require("lodash");
const medicationGroups_1 = require("../data/medicationGroups");
function applyVariation(substance, variation) {
    let group = _.find(medicationGroups_1.medicationGroups, { name: substance.group });
    if (typeof group === 'undefined') {
        console.warn(`${substance.name} is in group ${substance.group} but did not find a group with that name. Not applying those styles`);
        group = _.find(medicationGroups_1.medicationGroups, { name: 'Sonstige' });
    }
    const returnObj = {
        name: variation.name ?? substance.name,
        group: group?.name ?? 'Ohne',
        labelType: variation.labelType,
        style: {
            background: substance.style?.background ?? group?.style.background,
            unit: substance.style?.unit ?? group?.style.unit,
            dose: substance.style?.dose ?? group?.style.dose,
            name: substance.style?.name ?? group?.style.name
        }
    };
    return _.merge(returnObj, variation);
}
