export interface Tax {
    cif: string
    tuition: number
    mealPerDay: number
    workingDays: number
    items: TaxItem[]
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
    tuition: 0,
    mealPerDay: 0,
    workingDays: 0,
    items: [],
}
