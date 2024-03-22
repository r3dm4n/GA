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

export interface WorkingDays {
    date: string
    count: number
}
