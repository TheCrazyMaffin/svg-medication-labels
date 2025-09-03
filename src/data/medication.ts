import { Substance } from "../types/medication";

/**
 * List of substances.
 */
export const medications: Substance[] = [
  // Hypnotika
  {
    group: 'Hypnotika',
    name: 'Brevimytal',
    variations: [
      { labelType: 'line' },
      { labelType: 'small' }
    ]
  },
  {
    group: 'Hypnotika',
    name: 'Dexmedetomidin',
    variations: [
      { labelType: 'line' },
      {
        labelType: 'large',
        dose: '<var/> μg/ml',
        amount: '<var/> μg Dexmedetomidin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '4 μg/ml',
        amount: '200 μg Dexmedetomidin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Hypnotika',
    name: 'esKETAmin',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '5', unit: 'mg/ml' },
      { labelType: 'small', dose: '<bold>25</>', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '<var/> mg/ml',
        amount: '<var/> mg Esketamin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '2 mg/ml',
        amount: '100 mg Esketamin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '5 mg/ml',
        amount: '250 mg Esketamin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Hypnotika',
    name: '4-Hydroxybutyrat',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '200', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Hypnotika',
    name: 'KETAmin',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '10', unit: 'mg/ml' },
      { labelType: 'small', dose: '50', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '<var/> mg/ml',
        amount: '<var/> mg Ketamin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '5 mg/ml',
        amount: '250 mg Ketamin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '10 mg/ml',
        amount: '500 mg Ketamin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '20 mg/ml',
        amount: '1.000 mg Ketamin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '50 mg/ml',
        amount: '2.500 mg Ketamin'
      }
    ]
  },
  {
    group: 'Hypnotika',
    name: 'Methohexital',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '10', unit: 'mg/ml' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '20', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Hypnotika',
    name: 'Propofol',
    variations: [
      { labelType: 'line' },
      {
        labelType: 'small',
        dose: '5',
        unit: 'mg/ml',
        name: 'Propofol <#f54029>0,5%</>'
      },
      {
        labelType: 'small',
        dose: '10',
        unit: 'mg/ml',
        name: 'Propofol <#f54029>1%</>'
      },
      {
        labelType: 'small',
        dose: '20',
        unit: 'mg/ml',
        name: 'Propofol <#f54029>2%</>'
      },
      {
        labelType: 'large',
        dose: '<#f54029>10</> mg/ml',
        name: 'Propofol <#f54029>1%</>'
      },
      {
        labelType: 'large',
        dose: '<#f54029>20</> mg/ml',
        name: 'Propofol <#f54029>2%</>'
      },
      {
        labelType: 'large',
        dose: '<var/> mg/ml',
        name: 'Propofol <var/>%'
      }
    ]
  },
  {
    group: 'Hypnotika',
    name: 'Thiopental',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '25', unit: 'mg/ml' },
      { labelType: 'small', dose: '50', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '25 mg/ml',
        amount: '1.000 mg Thiopental',
        solvent: '<bold>40</> ml Aqua dest.'
      },
      {
        labelType: 'large',
        dose: '50 mg/ml',
        amount: '2.500 mg Thiopental',
        solvent: '<bold>50</> ml Aqua dest.'
      }
    ]
  },
  // Benzodiazepine
  {
    group: 'Benzodiazepine',
    name: 'clonazePAM',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '<var/> mg/ml',
        amount: '<var/> mg Clonazepam',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Benzodiazepine',
    name: 'Diazepam',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '5', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '<var/> mg/ml',
        amount: '<var/> mg Diazepam',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Benzodiazepine',
    name: 'Dikaliumclorazepat',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '20', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Benzodiazepine',
    name: 'Flunitrazepam',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Benzodiazepine',
    name: 'LORazepam',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '2', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '<var/> mg/ml',
        amount: '<var/> mg Lorazepam',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '0,4 mg/ml',
        amount: '20 mg Lorazepam',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Benzodiazepine',
    name: 'Midazolam',
    style: {
      dose: '#FFF',
      name: '#FFF',
      unit: '#FFF'
    },
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '1', unit: 'mg/ml' },
      { labelType: 'small', dose: '2', unit: 'mg/ml' },
      { labelType: 'small', dose: '5', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '<var/> mg/ml',
        amount: '<var/> mg Midazolam',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '<var/> ml'
      },
      {
        labelType: 'large',
        dose: '1 mg/ml',
        amount: '<bold>45</> mg Midazolam',
        solvent: '<check/> NaCl 0,9% <check/> G 5%'
      },
      {
        labelType: 'large',
        dose: '2 mg/ml',
        amount: '100 mg Midazolam',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '5 mg/ml'
      }
    ]
  },

  // Benzodiazepin-Antagonisten
  {
    group: 'Benzodiazepin-Antagonisten',
    name: 'Flumazenil',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '0,1', unit: 'mg/ml' }
    ]
  },
  // Muskelrelaxantien
  {
    group: 'Muskelrelaxantien',
    name: 'Atracurium',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '5', unit: 'mg/ml' },
      { labelType: 'small', dose: '10', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Muskelrelaxantien',
    name: 'Cisatracurium',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '1', unit: 'mg/ml' },
      { labelType: 'small', dose: '2', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '<var/> mg/ml',
        amount: '<var/> mg Cisatracurium',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '<var/> ml',
        note: '<bold>Muss separat laufen!</>'
      },
      {
        labelType: 'large',
        dose: '2 mg/ml',
        note: '<bold>Muss separat laufen!</>'
      }
    ]
  },
  {
    group: 'Muskelrelaxantien',
    name: 'Mivacurium',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '1', unit: 'mg/ml' },
      { labelType: 'small', dose: '2', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Muskelrelaxantien',
    name: 'PANcuronium',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '2', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Muskelrelaxantien',
    name: 'ROCuronium',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '1', unit: 'mg/ml' },
      { labelType: 'small', dose: '5', unit: 'mg/ml' },
      { labelType: 'small', dose: '10', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Muskelrelaxantien',
    name: 'VECuronium',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '2', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Muskelrelaxantien',
    name: 'Suxamethonium',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '10', unit: 'mg/ml' },
      { labelType: 'small', dose: '20', unit: 'mg/ml' }
    ],
    style: {
      dose: '#FFF',
      name: '#FFF',
      unit: '#FFF',
      background: {
        type: 'two-colors-horizontal',
        colors: ['#000', '#f54029']
      }
    }
  },
  // Opioide
  {
    group: 'Opioide',
    name: 'Alfentanil',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '0,5', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Opioide',
    name: 'Buprenorphin',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '0,3', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Opioide',
    name: 'fentaNYL',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'μg/ml' },
      {
        labelType: 'large',
        dose: '<var/> μg/ml',
        amount: '<var/> mg Fentanyl',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '30 μg/ml',
        amount: '1,5 mg Fentanyl',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '50 μg/ml',
        amount: '2,5 mg Fentanyl',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Opioide',
    name: 'HYDROmorphon',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Opioide',
    name: 'Levomethadon',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Opioide',
    name: 'Morphin',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '1', unit: 'mg/ml' },
      { labelType: 'small', dose: '10', unit: 'mg/ml' },
      { labelType: 'plus', amount: '<var/> mg' },
      {
        labelType: 'large',
        dose: '<var/> mg/ml',
        amount: '<var/> mg Morphin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '1 mg/ml',
        amount: '50 mg Morphin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '1,2 mg/ml',
        amount: '60 mg Morphin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '2 mg/ml',
        amount: '100 mg Morphin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Opioide',
    name: 'oxyCODON',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '1', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '1 mg/ml',
        amount: '50 mg Oxycodon',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Opioide',
    name: 'Pethidin',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '5', unit: 'mg/ml' },
      { labelType: 'small', dose: '50', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Opioide',
    name: 'PIRItramid',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '1', unit: 'mg/ml' },
      { labelType: 'small', dose: '1,5', unit: 'mg/ml' },
      { labelType: 'small', dose: '7,5', unit: 'mg/ml' },
      { labelType: 'plus', amount: '<var/> mg' },
      {
        labelType: 'large',
        dose: '<var/> mg/ml',
        amount: '<var/> mg Piritramid',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '0,9 mg/ml',
        amount: '45 mg Piritramid',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '1 mg/ml',
        amount: '45 mg Piritramid',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '<bold>45</> ml'
      },
      {
        labelType: 'large',
        dose: '1,5 mg/ml',
        amount: '75 mg Piritramid',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ],
    style: {
      dose: '#FFF',
      name: '#FFF',
      unit: '#FFF'
    }
  },
  {
    group: 'Opioide',
    name: 'Remifentanil',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'μg/ml' },
      { labelType: 'small', dose: '20', unit: 'μg/ml' },
      { labelType: 'small', dose: '60', unit: 'μg/ml' },
      { labelType: 'small', dose: '100', unit: 'μg/ml' },
      {
        labelType: 'large',
        dose: '<var/> μg/ml',
        amount: '<var/> mg Remifentanil',
        solvent: '<var/><var/>',
        volume: '<var/> ml'
      },
      {
        labelType: 'large',
        dose: '10 μg/ml',
        amount: '0,5 mg Remifentanil',
        solvent: '<var/><var/>',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '20 μg/ml',
        amount: '1 mg Remifentanil',
        solvent: '<var/><var/>',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '40 μg/ml',
        amount: '2 mg Remifentanil',
        solvent: '<var/><var/>',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '60 μg/ml',
        amount: '3 mg Remifentanil',
        solvent: '<var/><var/>',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '100 μg/ml',
        amount: '5 mg Remifentanil',
        solvent: '<var/><var/>',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Opioide',
    name: 'SUFentanil',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'μg/ml' },
      { labelType: 'small' },
      { labelType: 'small', dose: '5', unit: 'μg/ml' },
      { labelType: 'small', dose: '10', unit: 'μg/ml' },
      { labelType: 'small', dose: '20', unit: 'μg/ml' },
      { labelType: 'plus', amount: '<var/> μg' },
      {
        labelType: 'large',
        dose: '<var/> μg/ml',
        amount: '<var/> μg Sufentanil',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '5 μg/ml',
        amount: '250 μg Sufentanil',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '10 μg/ml',
        amount: '500 μg Sufentanil',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '15 μg/ml',
        amount: '750 μg Sufentanil',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '20 μg/ml',
        amount: '1.000 μg Sufentanil',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '25 μg/ml',
        amount: '1.250 μg Sufentanil',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Opioide',
    name: 'traMADol',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '50', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '10 mg/ml',
        amount: '500 mg Tramadol',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  // Vasopressoren
  {
    group: 'Vasopressoren',
    name: 'Akrinor ®',
    variations: [
      { labelType: 'line' },
      { labelType: 'small' }
    ]
  },
  {
    group: 'Vasopressoren',
    name: 'Cafedrin/Theodrenalin',
    variations: [
      { labelType: 'line' },
      { labelType: 'small' }
    ]
  },
  {
    group: 'Vasopressoren',
    name: 'ePHEDrin',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '5', unit: 'mg/ml' },
      { labelType: 'small', dose: '10', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Vasopressoren',
    name: 'DOPamin',
    variations: [
      { labelType: 'line' },
      {
        labelType: 'large',
        dose: '<var/> mg/ml',
        amount: '<var/> mg Dopamin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '5 mg/ml'
      },
      {
        labelType: 'large',
        dose: '10 mg/ml'
      }
    ]
  },
  {
    group: 'Vasopressoren',
    name: 'EPINEPHrin',
    variations: [
      { labelType: 'line', name: '<#fff>EPINEPHrin</>' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '0,1', unit: 'mg/ml' },
      { labelType: 'small', dose: '10', unit: 'μg/ml' },
      {
        labelType: 'large',
        dose: '<var/> <#debfd9>μg/ml</>',
        amount: '<var/> mg Epinephrin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '<#debfd9>10 μg/ml</>',
        amount: '0,5 mg Epinephrin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '<#debfd9>50 μg/ml</>',
        amount: '2,5 mg Epinephrin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '<#debfd9>0,1 mg/ml</>',
        amount: '5 mg Epinephrin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '<#debfd9>0,2 mg/ml</>',
        amount: '10 mg Epinephrin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '<#debfd9>0,5 mg/ml',
        amount: '25 mg Epinephrin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ],
    style: {
      name: '#debfd9',
      background: {
        type: 'two-colors-horizontal',
        colors: ['#000', '#debfd9']
      }
    }
  },
  {
    group: 'Vasopressoren',
    name: 'Norepinephrin',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '0,1', unit: 'mg/ml' },
      { labelType: 'small', dose: '10', unit: 'μg/ml' },
      {
        labelType: 'large',
        dose: '<var/> mg/ml',
        amount: '<var/> mg Norepinephrin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '20 μg/ml',
        amount: '1 mg Norepinephrin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '0,1 mg/ml',
        amount: '5 mg Norepinephrin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '0,2 mg/ml',
        amount: '10 mg Norepinephrin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '0,5 mg/ml',
        amount: '25 mg Norepinephrin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Vasopressoren',
    name: 'Phenylephrin',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '40', unit: 'μg/ml' },
      { labelType: 'small', dose: '0,1', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Vasopressoren',
    name: 'Terlipresssin',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '0,1', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Vasopressoren',
    name: 'Vasopressin',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'i.E./ml' },
      { labelType: 'small', dose: '20', unit: 'i.E./ml' },
      {
        labelType: 'large',
        dose: '1 i.E./ml',
        amount: '40 i.E. Vasopressin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '<bold>40</> ml'
      }
    ]
  },
  // Vasodilatatoren
  {
    group: 'Vasodilatatoren',
    name: 'Alprostadil',
    variations: [
      { labelType: 'line' },
      {
        labelType: 'large',
        dose: '<var/> μg/ml',
        amount: '<var/> μg Alprostadil',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '10 μg/ml',
        amount: '500 μg Alprostadil',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Vasodilatatoren',
    name: 'cloNIDin',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'μg/ml' },
      { labelType: 'small', dose: '10', unit: 'μg/ml' },
      { labelType: 'small', dose: '15', unit: 'μg/ml' },
      { labelType: 'small', dose: '30', unit: 'μg/ml' },
      { labelType: 'small', dose: '75', unit: 'μg/ml' },
      { labelType: 'small', dose: '150', unit: 'μg/ml' },
      {
        labelType: 'large',
        dose: '<var/> μg/ml',
        amount: '<var/> mg Clonidin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '15 μg/ml',
        amount: '0,75 mg Clonidin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '30 μg/ml',
        amount: '1,5 mg Clonidin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '45 μg/ml',
        amount: '2,25 mg Clonidin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Vasodilatatoren',
    name: 'dihydrALAZIN',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '2,5', unit: 'mg/ml' },
      { labelType: 'small', dose: '12,5', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '<var/> mg/ml',
        amount: '<var/> mg Dihydralazin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '0,5 mg/ml',
        amount: '25 mg Dihydralazin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '1 mg/ml',
        amount: '50 mg Dihydralazin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Vasodilatatoren',
    name: 'Enalapril',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '0,1 mg/ml',
        amount: '5 mg Enalapril',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '50 μg/ml',
        amount: '2,5 mg Enalapril',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Vasodilatatoren',
    name: 'Epoprostenol',
    variations: [
      { labelType: 'line' },
      {
        labelType: 'large',
        dose: '10 μg/ml',
        amount: '500 μg Epoprostenol',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Vasodilatatoren',
    name: 'GlycerolTriNitrat',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '1', unit: 'mg/ml' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '50', unit: 'μg/ml' },
      {
        labelType: 'large',
        dose: '<var/> μg/ml',
        amount: '<var/> mg Glyceroltrinitrat',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '1 mg/ml'
      }
    ]
  },
  {
    group: 'Vasodilatatoren',
    name: 'Iloprost',
    variations: [
      { labelType: 'line' },
      {
        labelType: 'large',
        dose: '<var/> μg/ml',
        amount: '<var/> μg Iloprost',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '2 μg/ml',
        amount: '100 μg Iloprost',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Vasodilatatoren',
    name: 'NIFEdipin',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '0,1 mg/ml'
      }
    ]
  },
  {
    group: 'Vasodilatatoren',
    name: 'niMODipin',
    variations: [
      { labelType: 'line' },
      {
        labelType: 'large',
        dose: '0,2 mg/ml',
        note: '<bold>Muss separat laufen!</>'
      },
      {
        labelType: 'large',
        dose: '50 μg/ml',
        amount: '2,5 mg Nimodipin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml',
        note: '<bold>Muss separat laufen!</>'
      }
    ]
  },
  {
    group: 'Vasodilatatoren',
    name: 'Nitroprussid-Na',
    variations: [
      { labelType: 'line' },
      {
        labelType: 'large',
        dose: '1,2 mg/ml',
        amount: '60 mg Nitroprussid-Na',
        solvent: 'G 5%',
        volume: '50 ml',
        note: '<bold>Lichtempfindlich!</>'
      }
    ]
  },
  {
    group: 'Vasodilatatoren',
    name: 'Phentolamin',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Vasodilatatoren',
    name: 'Urapidil',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '2', unit: 'mg/ml' },
      { labelType: 'small', dose: '5', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '<var/> mg/ml',
        amount: '<var/> mg Urapidil',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '2 mg/ml',
        amount: '100 mg Urapidil',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '2,5 mg/ml',
        amount: '125 mg Urapidil',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '5 mg/ml'
      }
    ]
  },
  // Lokalanästhetika
  {
    group: 'Lokalanästhetika',
    name: 'BUPIvacain',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: '%' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '2,5', unit: 'mg/ml' },
      { labelType: 'plus', name: 'BUPIvacain <var/>%', amount: '<var/>ml = <var/>mg' }
    ]
  },
  {
    group: 'Lokalanästhetika',
    name: 'Lidocain',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: '%' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '10', unit: 'mg/ml' },
      { labelType: 'small', dose: '20', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '<var/> mg/ml',
        amount: '<var/> ml (<var/> mg) Lidocain 2%',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Lokalanästhetika',
    name: 'Mepivacain',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: '%' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '10', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Lokalanästhetika',
    name: 'Prilocain',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: '%' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '10', unit: 'mg/ml' },
      { labelType: 'small', dose: '20', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Lokalanästhetika',
    name: 'ROPIvacain',
    variations: [
      { labelType: 'line' },
      { labelType: 'plus', name: 'ROPIvacain <var/>%', amount: '<var/>ml = <var/>mg' },
      { labelType: 'small', dose: '<var/>', unit: '%' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '2', unit: 'mg/ml' },
      { labelType: 'small', dose: '3,75', unit: 'mg/ml' },
      { labelType: 'small', dose: '5', unit: 'mg/ml' },
      { labelType: 'small', dose: '7,5', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '<var/> mg/ml',
        amount: '<var/> ml (<var/> mg) Ropivacain 1%',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '1,2 mg/ml',
        amount: '6 ml (60 mg) Ropivacain 1%',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '1,6 mg/ml',
        amount: '8 ml (80 mg) Ropivacain 1%',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '2 mg/ml',
        amount: '10 ml (100 mg) Ropivacain 1%',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '2,5 mg/ml',
        amount: '12,5 ml (125 mg) Ropivacain 1%',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '3 mg/ml',
        amount: '15 ml (150 mg) Ropivacain 1%',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '4,5 mg/ml',
        amount: '22,5 ml (225 mg) Ropivacain 1%',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  // Antiemetika
  {
    group: 'Antiemetika',
    name: 'dimenhyDRINAT',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '6,2', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Antiemetika',
    name: 'DOLAsetron',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '20', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Antiemetika',
    name: 'Droperidol',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '2,5', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '2,5 mg/ml',
        amount: '125 mg Droperidol',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Antiemetika',
    name: 'GRANIsetron',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '1', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Antiemetika',
    name: 'MetoCloPramid',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '5', unit: 'mg/ml' },
      { labelType: 'plus', amount: '<var/> mg' },
      {
        labelType: 'large',
        dose: '1 mg/ml',
        amount: '50 mg Metoclopramid',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Antiemetika',
    name: 'ONDANsetron',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '2', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Antiemetika',
    name: 'TROPIsetron',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' }
    ]
  },
  // Antikoagulantien
  {
    group: 'Antikoagulantien',
    name: 'Abciximab',
    variations: [
      { labelType: 'line' },
      {
        labelType: 'large',
        dose: '150 μg/ml',
        amount: '7,5 mg Abciximab',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Antikoagulantien',
    name: 'Alteplase',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      {
        name: '<#f54029>Alteplase</>',
        labelType: 'large',
        dose: '<var/> <#f54029>mg/ml</>',
        amount: '<var/> mg Alteplase',
        solvent: '<var/> ml Aqua dest.'
      }
    ]
  },
  {
    group: 'Antikoagulantien',
    name: 'Argatroban',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '1 mg/ml',
        amount: '50 mg Argatroban',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Antikoagulantien',
    name: 'Danaparoid-Na',
    variations: [
      { labelType: 'line' },
      {
        labelType: 'large',
        dose: '60 i.E./ml',
        amount: '3.000 i.E. Danaparoid-Na',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '75 i.E./ml',
        amount: '3.750 i.E. Danaparoid-Na',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Antikoagulantien',
    name: 'Enoxaparin',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '100', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Antikoagulantien',
    name: 'Heparin',
    style: {
      background: {
        type: 'border-solid',
        colors: ['#000']
      }
    },
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'i.E./ml' },
      { labelType: 'small', dose: '200', unit: 'i.E./ml' },
      { labelType: 'small', dose: '250', unit: 'i.E./ml' },
      { labelType: 'small', dose: '400', unit: 'i.E./ml' },
      { labelType: 'small', dose: '500', unit: 'i.E./ml' },
      { labelType: 'small', dose: '1.000', unit: 'i.E./ml' },
      { labelType: 'small', dose: '5.000', unit: 'i.E./ml' },
      { labelType: 'plus', amount: '<var/> i.E.' },
      {
        labelType: 'large',
        dose: '<var/> i.E./ml',
        amount: '<var/> i.E. Heparin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '<#f54029>200</> i.E./ml',
        amount: '10.000 i.E. Heparin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '<#f54029>250</> i.E./ml',
        amount: '12.500 i.E. Heparin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '<#f54029>400</> i.E./ml',
        amount: '20.000 i.E. Heparin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '<#f54029>500</> i.E./ml',
        amount: '25.000 i.E. Heparin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Antikoagulantien',
    name: 'Lepirudin',
    variations: [
      { labelType: 'line' },
      {
        labelType: 'large',
        dose: '1 mg/ml',
        amount: '50 mg Lepirudin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Antikoagulantien',
    name: 'Streptokinase',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'i.E./ml' }
    ]
  },
  {
    group: 'Antikoagulantien',
    name: 'Urokinase',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'i.E./ml' }
    ]
  },
  // Koagulantien
  {
    group: 'Koagulantien',
    name: 'Protamin',
    style: {
      background: {
        type: 'border-hattched',
        colors: ['#000']
      }
    },
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '1.000', unit: 'i.E./ml' }
    ]
  },
  {
    group: 'Koagulantien',
    name: 'Tranexamsäure',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '100', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '40 mg/ml',
        amount: '2 g Tranexamsäure',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  // Antiarrhythmika
  {
    group: 'Antiarrhythmika',
    name: 'aDENOsin',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '3', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Antiarrhythmika',
    name: 'aJMALlin',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '5', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '5 mg/ml',
        amount: '250 mg Ajmalin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Antiarrhythmika',
    name: 'aMIOdaron',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '30', unit: 'mg/ml' },
      { labelType: 'small', dose: '50', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '<var/> mg/ml',
        amount: '<var/> mg Amiodaron',
        solvent: 'G 5%',
        volume: '50 ml',
        note: 'Muss separat laufen!'
      },
      {
        labelType: 'large',
        dose: '18 mg/ml',
        amount: '900 mg Amiodaron',
        solvent: 'G 5%',
        volume: '50 ml',
        note: 'Muss separat laufen!'
      },
      {
        labelType: 'large',
        dose: '21 mg/ml',
        amount: '1050 mg Amiodaron',
        solvent: 'G 5%',
        volume: '50 ml',
        note: 'Muss separat laufen!'
      },
      {
        labelType: 'large',
        dose: '25 mg/ml',
        amount: '1250 mg Amiodaron',
        solvent: 'G 5%',
        volume: '50 ml',
        note: 'Muss separat laufen!'
      }
    ]
  },
  {
    group: 'Antiarrhythmika',
    name: 'Esmolol',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '10', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Antiarrhythmika',
    name: 'Flecainid',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '10', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Antiarrhythmika',
    name: 'Metoprolol',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '0,5', unit: 'mg/ml' },
      { labelType: 'small', dose: '1', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '<var/> mg/ml',
        amount: '<var/> mg Metoprolol',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '0,2 mg/ml',
        amount: '10 mg Metoprolol',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '0,3 mg/ml',
        amount: '15 mg Metoprolol',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '0,4 mg/ml',
        amount: '20 mg Metoprolol',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '0,5 mg/ml',
        amount: '25 mg Metoprolol',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '1 mg/ml'
      }
    ]
  },
  {
    group: 'Antiarrhythmika',
    name: 'Pindolol',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '0,2', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Antiarrhythmika',
    name: 'Propafenon',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '3,5', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '2,8 mg/ml',
        amount: '140 mg Propafenon',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Antiarrhythmika',
    name: 'Sotalol',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '10', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '1,6 mg/ml',
        amount: '80 mg Sotalol',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Antiarrhythmika',
    name: 'Verapamil',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '1', unit: 'mg/ml' },
      { labelType: 'small', dose: '2,5', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '<var/> mg/ml',
        amount: '<var/> mg Verapamil',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '1 mg/ml',
        amount: '50 mg Verapamil',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  // Antikonvulsiva
  {
    group: 'Antikonvulsiva',
    name: 'levETIRAcetam',
    variations: [
      { labelType: 'line' },
      {
        labelType: 'large',
        dose: '<var/> mg/ml',
        amount: '<var/> mg Levetiracetam',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml',
        note: 'Kont. Gabe off-label'
      }
    ]
  },
  {
    group: 'Antikonvulsiva',
    name: 'Phenobarbital',
    variations: [
      { labelType: 'line' },
      {
        labelType: 'large',
        dose: '<var/> mg/ml',
        amount: '<var/> mg Phenobarbital',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Antikonvulsiva',
    name: 'Phenytoin',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '50', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '<var/> mg/ml',
        amount: '<var/> mg Phenytoin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '15 mg/ml'
      }
    ]
  },
  {
    group: 'Antikonvulsiva',
    name: 'Valproinsäure',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '100', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '<var/> mg/ml',
        amount: '<var/> mg Valproinsäure',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '24 mg/ml',
        amount: '1.200 mg Valproinsäure',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  // Bronchodilatatoren
  {
    group: 'Bronchodilatatoren',
    name: 'Fenoterol',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '5', unit: 'μg/ml' },
      { labelType: 'small', dose: '<var/>', unit: 'μg/ml' },
      {
        labelType: 'large',
        dose: '<var/> μg/ml',
        amount: '<var/> mg Fenoterol',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Bronchodilatatoren',
    name: 'Ipratropiumbromid',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '0,25', unit: 'mg/ml' },
      { labelType: 'small', dose: '0,5', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Bronchodilatatoren',
    name: 'Orciprenalin',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '0,5', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '0,5 mg/ml',
        amount: '25 mg Orciprenalin'
      }
    ]
  },
  {
    group: 'Bronchodilatatoren',
    name: 'Reproterol',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'μg/ml' },
      { labelType: 'small', dose: '90', unit: 'μg/ml' },
      {
        labelType: 'large',
        dose: '<var/> μg/ml',
        amount: '<var/> μg Reproterol',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '9 μg/ml',
        amount: '450 μg Reproterol',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '18 μg/ml',
        amount: '900 μg Reproterol',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '43,2 μg/ml',
        amount: '2.160 μg Reproterol',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Bronchodilatatoren',
    name: 'Salbutamol',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '0,3', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Bronchodilatatoren',
    name: 'Theophyllin',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '20', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '<var/> mg/ml',
        amount: '<var/> mg Theophyllin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '8 mg/ml',
        amount: '400 mg Theophyllin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '12 mg/ml',
        amount: '600 mg Theophyllin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '20 mg/ml'
      }
    ]
  },
  // Elektrolyte
  {
    group: 'Elektrolyte',
    name: 'Calciumchlorid 5,5%',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '0,5', unit: 'mmol Ca/ml' }
    ]
  },
  {
    group: 'Elektrolyte',
    name: 'Calcium<small>gluconat</> 10%',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '0,23', unit: 'mmol Ca/ml' },
      {
        labelType: 'large',
        amount: 'Calciumgluconat 10%',
        note: '0,23 mmol Ca/ml'
      }
    ]
  },
  {
    group: 'Elektrolyte',
    name: 'Glyceroldihydrogen-Phosphat',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '1', unit: 'mmol PO43-/ml' }
    ]
  },
  {
    group: 'Elektrolyte',
    name: 'Kaliumchlorid',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '1', unit: 'mmol/ml', name: 'KCl 7,45%' },
      { labelType: 'plus', name: 'KCl', amount: '<var/> mmol' },
      {
        labelType: 'large',
        dose: '1 mmol/ml',
        name: 'KCl 7,45%'
      },
      {
        labelType: 'large',
        dose: '2 mmol/ml',
        name: 'KCl 14,9%'
      }
    ],
    style: {
      dose: '#FFF',
      name: '#FFF',
      unit: '#FFF',
      background: {
        type: 'two-colors-diagonal',
        colors: ['#008ccc', '#006338']
      }
    }
  },
  {
    group: 'Elektrolyte',
    name: 'Kalium-L-Malat',
    variations: [
      { labelType: 'line' },
      {
        labelType: 'large',
        dose: '1 mmol/ml',
        name: 'Kalium-L-Malat 17,21%'
      }
    ]
  },
  {
    group: 'Elektrolyte',
    name: 'Magnesium asparat',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '0,3', unit: 'mmol Mg/ml' }
    ]
  },
  {
    group: 'Elektrolyte',
    name: 'Magnesiumsulfat',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '0,4', unit: 'mmol Mg/ml' },
      { labelType: 'plus', name: 'Magnesiumsulfat 50%', amount: '<var/> g' },
      {
        labelType: 'large',
        amount: '2 mmol Mg/ml',
        name: 'Magnesium<small>sulfat</> 50%'
      },
      {
        labelType: 'large',
        amount: '0,4 mmol Mg/ml',
        name: 'Magnesium<small>sulfat</> 10%'
      },
      {
        labelType: 'large',
        amount: '2 mmol Mg/ml',
        name: 'Magnesium<small>sulfat</> 50%',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Elektrolyte',
    name: 'Natriumchlorid 0,9%',
    style: {
      dose: '#FFF',
      name: '#FFF',
      unit: '#FFF',
      background: {
        type: 'plain',
        colors: ['#006338']
      }
    },
    variations: [
      { labelType: 'line' },
      { name: 'NaCl 0,9%', labelType: 'small' }
    ]
  },
  {
    group: 'Elektrolyte',
    name: 'Natriumchlorid 0,45%',
    variations: [
      { labelType: 'line' },
      { name: 'NaCl 0,45%', labelType: 'large' },
      {
        labelType: 'large',
        dose: '0,45%',
        amount: '25 ml NaCl 0,9% + 25 ml Aqua dest.',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Elektrolyte',
    name: 'NaCl 5,85%',
    variations: [
      { labelType: 'line' },
      {
        labelType: 'large',
        dose: '1 mmol/ml',
        amount: 'Natriumchlorid 1 molar (5,85%)'
      }
    ]
  },
  {
    group: 'Elektrolyte',
    name: 'Na-Hydrogencarbonat',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mmol/ml' },
      { labelType: 'small', dose: '1', unit: 'mmol/ml' },
      {
        labelType: 'large',
        dose: '<var/> mmol/ml',
        amount: '<var/> ml Natriumhydrogencarbonat 8,4%',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '1 mmol/ml',
        name: 'Natriumhydrogencarbonat 8,4%'
      }
    ]
  },
  {
    group: 'Elektrolyte',
    name: 'Na-Phosphat Braun®',
    variations: [
      { labelType: 'line' },
      {
        labelType: 'large',
        dose: '0,6 mmol PO43-/ml',
        amount: '1 mmol Na/ml'
      }
    ]
  },
  {
    group: 'Elektrolyte',
    name: 'Na-Thiosulfat 10%',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '100', unit: 'mg/ml' }
    ]
  },
  // Hormone
  {
    group: 'Hormone',
    name: 'desmoPRESSIN',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'μg/ml' },
      { labelType: 'small', dose: '4', unit: 'μg/ml' },
      {
        labelType: 'large',
        dose: '<var/> μg/ml',
        amount: '<var/> μg Desmopressin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Hormone',
    name: 'DEXAmethason',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '4', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Hormone',
    name: 'Hydrocortison',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '5', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '<var/> mg/ml',
        amount: '<var/> mg Hydrocortison',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '2 mg/ml',
        amount: '100 mg Hydrocortison',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '4 mg/ml',
        amount: '200 mg Hydrocortison',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '5 mg/ml',
        amount: '250 mg Hydrocortison',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Hormone',
    name: 'LEVOthyroxin',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'μg/ml' }
    ]
  },
  {
    group: 'Hormone',
    name: 'LIOthyronin',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Hormone',
    name: 'methylPREDNISolon',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '50', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Hormone',
    name: 'prednisoLON',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '100', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Hormone',
    name: 'ocTREOtid',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'μg/ml' },
      {
        labelType: 'large',
        dose: '60 μg/ml',
        amount: '3 mg Octreotid',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Hormone',
    name: 'OXYTOcin',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'i.E./ml' },
      { labelType: 'small', dose: '0,3', unit: 'i.E./ml' },
      { labelType: 'small', dose: '3', unit: 'i.E./ml' },
      { labelType: 'small', dose: '10', unit: 'i.E./ml' },
      { labelType: 'plus', amount: '<var/> i.E.' },
      {
        labelType: 'large',
        dose: '0,2 i.E./ml',
        amount: '10 i.E. Oxytocin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  {
    group: 'Hormone',
    name: 'Somatostatin',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Hormone',
    name: 'Sulproston',
    variations: [
      { labelType: 'line' },
      { labelType: 'plus', amount: '<var/> μg' }
    ]
  },
  {
    group: 'Hormone',
    name: 'Insulin',
    style: {
      background: {
        type: 'two-colors-diagonal',
        colors: ['#f5e814', '#70331f']
      },
      name: '#fff',
      dose: '#fff',
      unit: '#fff'
    },
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'i.E./ml' },
      { labelType: 'small', dose: '1', unit: 'i.E./ml' },
      { labelType: 'small', dose: '100', unit: 'i.E./ml' },
      { labelType: 'plus', amount: '<var/> i.E.' },
      {
        labelType: 'large',
        dose: '<var/> i.E./ml',
        amount: '<var/> i.E. Insulin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      },
      {
        labelType: 'large',
        dose: '1 i.E./ml',
        amount: '50 i.E. Insulin',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '50 ml'
      }
    ]
  },
  // Inodilatatoren
  {
    group: 'Inodilatatoren',
    name: 'Enoximon',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '5', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Inodilatatoren',
    name: 'Levosimendan',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Inodilatatoren',
    name: 'Milrinon',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '1', unit: 'mg/ml' }
    ]
  },
  // Sonstige
  {
    group: 'Sonstige',
    name: 'Acetylcystein',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '100', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Sonstige',
    name: 'AcetylSalicylSäure',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '100', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Sonstige',
    name: 'ASS',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Sonstige',
    name: 'Ca-FOLINAT',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '10', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Sonstige',
    name: 'Cernevit®',
    variations: [
      { labelType: 'line' },
      { labelType: 'small' }
    ]
  },
  {
    group: 'Sonstige',
    name: 'cIMEtidin',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '100', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Sonstige',
    name: 'cLEMAstin',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '2,5', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Sonstige',
    name: 'Dexketoprofen',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Sonstige',
    name: 'Dimetinden',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '1', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Sonstige',
    name: '4-DiMethylAminoPhenol',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '50', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Sonstige',
    name: 'f<#FFEB3B>URO</>semid',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '1', unit: 'mg/ml' },
      { labelType: 'small', dose: '5', unit: 'mg/ml' },
      { labelType: 'small', dose: '10', unit: 'mg/ml' },
      {
        labelType: 'large',
        dose: '<var/> mg/ml',
        amount: '<var/> mg Furosemid',
        solvent: '<check/> NaCl 0,9% <check/> G 5%',
        volume: '<var/> ml'
      }
    ]
  },
  {
    group: 'Sonstige',
    name: 'Glucose',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: '%' },
      { labelType: 'small', dose: '<var/>', unit: 'g/ml' }
    ]
  },
  {
    group: 'Sonstige',
    name: 'Glucose 40%',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '0,4', unit: 'g/ml' }
    ]
  },
  {
    group: 'Sonstige',
    name: 'Haloperidol',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '0,5', unit: 'mg/ml' },
      { labelType: 'small', dose: '1', unit: 'mg/ml' },
      { labelType: 'small', dose: '1,25', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Sonstige',
    name: 'Mesna',
    variations: [
      { labelType: 'line' },
      { labelType: 'small' }
    ]
  },
  {
    group: 'Sonstige',
    name: 'Metamizol',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '<var/>', unit: 'mg/ml' },
      { labelType: 'small', dose: '100', unit: 'mg/ml' },
      { labelType: 'small', dose: '500', unit: 'mg/ml' },
      { labelType: 'plus', amount: '<var/> g' },
      {
        labelType: 'large',
        dose: '<var/> mg/ml',
        amount: '<var/> g Metamizol',
        solvent: '<check/> NaCl 0,9% <check/> G 5%'
      }
    ]
  },
  {
    group: 'Sonstige',
    name: 'Omeprazol',
    variations: [
      { labelType: 'line' },
      { labelType: 'small' }
    ]
  },
  {
    group: 'Sonstige',
    name: 'Parecoxib',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '20', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Sonstige',
    name: 'Salzsäure 7,25%',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '2', unit: 'mmol/ml' }
    ]
  },
  {
    group: 'Sonstige',
    name: 'Thiamin',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '50', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Sonstige',
    name: 'Toluidinblau',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '30', unit: 'mg/ml' }
    ]
  },
  {
    group: 'Sonstige',
    name: 'Trometamol',
    variations: [
      { labelType: 'line' },
      { labelType: 'small', dose: '3', unit: 'mmol/ml' }
    ]
  }
]
