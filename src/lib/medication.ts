import * as _ from 'lodash'
import { medicationGroups } from '../data/medicationGroups'
import { SelectedVariation, Substance, Variation } from '../types/medication'

export function applyVariation (substance: Substance, variation: Variation) {
  let group = _.find(medicationGroups, { name: substance.group })

  if (typeof group === 'undefined') {
    console.warn(`${substance.name} is in group ${substance.group} but did not find a group with that name. Not applying those styles`)
    group = _.find(medicationGroups, { name: 'Sonstige' })
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
  }
  return _.merge(returnObj, variation) as SelectedVariation
}
