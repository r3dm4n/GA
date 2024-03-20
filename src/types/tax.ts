export interface Tax {
    meal: number
    tuition: number
    total: number
    cif: CIF
    extras: Extra[]
}

export interface CIF {
    name: string
    value: string
}
export interface Extra {
    name: string
    price: number
}

export interface WorkingDays {
    date: string
    count: number
}
