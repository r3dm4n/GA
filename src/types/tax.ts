export interface Tax {
    meal: number
    tuition: number
    total: number
    cif: string
    extras: Extra[]
}

export interface Company {
    name: string
    cif: string
    type: 'nursery' | 'kindergarten' | 'school'
}

export interface Extra {
    name: string
    price: number
}

export const INITIAL_TAX: Tax = {
    meal: 0,
    tuition: 0,
    total: 0,
    cif: '',
    extras: [],
}