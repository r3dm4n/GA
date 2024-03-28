export interface Tax {
    meal: number
    tuition: number
    total: number
    company: Company
    extras: Extra[]
}

export interface Company {
    name: string
    cif: string
}

export interface Extra {
    name: string
    price: number
}

export const INITIAL_TAX: Tax = {
    meal: 0,
    tuition: 0,
    total: 0,
    company: {
        name: '',
        cif: ''
    },
    extras: []
}