export interface Tax {
    cif: string
    mealPerDay: number
    tuition: number
    extraItems: TaxItem[]

    workingDays?: number
    absences?: number
    mealTotal?: number
    total?: number
}

export interface Company {
    name: string
    cif: string
    type: 'nursery' | 'kindergarten' | 'school'
}

export interface TaxItem {
    id: string
    name: string
    price: number
}

export const INITIAL_TAX: Tax = {
    cif: '',
    mealPerDay: 0,
    tuition: 0,
    extraItems: [],

    workingDays: 0,
    absences: 0,
    mealTotal: 0,
    total: 0,
}
