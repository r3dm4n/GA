export interface Tax {
    cif: string
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
    items: [],
}
