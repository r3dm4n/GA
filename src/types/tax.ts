export interface Tax {
    _id: string
    cif: string
    mealPerDay: number
    tuition: number
    extraItems: TaxItem[]
    date?: string
    workingDays?: number
    absences?: number
    mealTotal?: number
    total?: number
}

export interface Company {
    _id: string
    name: string
    cif: string
    J: string
    address: string
    type:
        | 'nursery'
        | 'kindergarten'
        | 'school'
        | 'gymnasium'
        | 'high-school'
        | 'university'
}

export interface TaxItem {
    id: string
    name: string
    price: number
}

export const INITIAL_TAX: Tax = {
    _id: '',
    cif: '',
    mealPerDay: 0,
    tuition: 0,
    extraItems: [],

    workingDays: 0,
    absences: 0,
    mealTotal: 0,
    total: 0,
}
