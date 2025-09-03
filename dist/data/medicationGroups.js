"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.medicationGroups = void 0;
/**
 * List of all groups.
 * Substances which are not assignable to any
 * of these are treated as "Sonstige"
 */
exports.medicationGroups = [
    {
        name: 'Hypnotika',
        style: {
            background: {
                type: 'plain',
                colors: ['#FFFF00']
            },
            dose: '#f54029',
            unit: '#000000',
            name: '#000000'
        }
    },
    {
        name: 'Benzodiazepine',
        style: {
            background: {
                type: 'plain',
                colors: ['#FF6600']
            },
            dose: '#000000',
            unit: '#000000',
            name: '#000000'
        }
    },
    {
        name: 'Benzodiazepin-Antagonisten',
        style: {
            background: {
                type: 'border-hattched',
                colors: ['#FF6600']
            },
            dose: '#000000',
            unit: '#000000',
            name: '#000000'
        }
    },
    {
        name: 'Muskelrelaxantien',
        style: {
            background: {
                type: 'two-colors-horizontal',
                colors: ['#FFFFFF', '#f54029']
            },
            dose: '#000000',
            unit: '#000000',
            name: '#000000'
        }
    },
    {
        name: 'Muskelrelaxans-Antagonisten',
        style: {
            background: {
                type: 'border-hattched',
                colors: ['#f54029']
            },
            dose: '#000000',
            unit: '#000000',
            name: '#000000'
        }
    },
    {
        name: 'Opioide',
        style: {
            background: {
                type: 'plain',
                colors: ['#85c7e3']
            },
            dose: '#000000',
            unit: '#000000',
            name: '#000000'
        }
    },
    {
        name: 'Opioid-Antagonisten',
        style: {
            background: {
                type: 'border-hattched',
                colors: ['#85c7e3']
            },
            dose: '#000000',
            unit: '#000000',
            name: '#000000'
        }
    },
    {
        name: 'Vasopressoren',
        style: {
            background: {
                type: 'plain',
                colors: ['#debfd9']
            },
            dose: '#000000',
            unit: '#000000',
            name: '#000000'
        }
    },
    {
        name: 'Vasodilatatoren',
        style: {
            background: {
                type: 'border-hattched',
                colors: ['#debfd9']
            },
            dose: '#000000',
            unit: '#000000',
            name: '#000000'
        }
    },
    {
        name: 'Lokalanästhetika',
        style: {
            background: {
                type: 'plain',
                colors: ['#c2b8ab']
            },
            dose: '#000000',
            unit: '#000000',
            name: '#000000'
        }
    },
    {
        name: 'Anticholinergika',
        style: {
            background: {
                type: 'plain',
                colors: ['#a9d963']
            },
            dose: '#000000',
            unit: '#000000',
            name: '#000000'
        }
    },
    {
        name: 'Cholinergika',
        style: {
            background: {
                type: 'border-hattched',
                colors: ['#a9d963']
            },
            dose: '#000000',
            unit: '#000000',
            name: '#000000'
        }
    },
    {
        name: 'Antiemetika',
        style: {
            background: {
                type: 'plain',
                colors: ['#edc282']
            },
            dose: '#000000',
            unit: '#000000',
            name: '#000000'
        }
    },
    {
        name: 'Antikoagulantien',
        style: {
            background: {
                type: 'border-solid',
                colors: ['#000000', '#cfc9c4']
            },
            dose: '#000000',
            unit: '#000000',
            name: '#000000'
        }
    },
    {
        name: 'Koagulantien',
        style: {
            background: {
                type: 'border-hattched',
                colors: ['#000000', '#cfc9c4']
            },
            dose: '#000000',
            unit: '#000000',
            name: '#000000'
        }
    },
    {
        name: 'Antiarrhythmika',
        style: {
            background: {
                type: 'two-colors-diagonal',
                colors: ['#008ccc', '#bf1238']
            },
            dose: '#ffffff',
            name: '#ffffff',
            unit: '#ffffff'
        }
    },
    {
        name: 'Antikonvulsiva',
        style: {
            background: {
                type: 'two-colors-diagonal',
                colors: ['#ba1fb5', '#636b70']
            },
            dose: '#ffffff',
            name: '#ffffff',
            unit: '#ffffff'
        }
    },
    {
        name: 'Bronchodilatatoren',
        style: {
            background: {
                type: 'two-colors-diagonal',
                colors: ['#82591f', '#2905a1']
            },
            dose: '#ffffff',
            name: '#ffffff',
            unit: '#ffffff'
        }
    },
    {
        name: 'Elektrolyte',
        style: {
            background: {
                type: 'two-colors-diagonal',
                colors: ['#ab035c', '#006338']
            },
            dose: '#ffffff',
            name: '#ffffff',
            unit: '#ffffff'
        }
    },
    {
        name: 'Hormone',
        style: {
            background: {
                type: 'two-colors-diagonal',
                colors: ['#d9cc61', '#70331f']
            },
            dose: '#ffffff',
            name: '#ffffff',
            unit: '#ffffff'
        }
    },
    {
        name: 'Inodilatatoren',
        style: {
            background: {
                type: 'two-colors-diagonal',
                colors: ['#63cc96', '#bf1238']
            },
            dose: '#ffffff',
            name: '#ffffff',
            unit: '#ffffff'
        }
    },
    {
        name: 'Sonstige',
        style: {
            background: {
                type: 'plain',
                colors: ['#ffffff']
            },
            dose: '#000000',
            name: '#000000',
            unit: '#000000'
        }
    }
];
