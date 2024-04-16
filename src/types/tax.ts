import { ObjectId } from 'mongodb'

export interface Tax {
    _id: ObjectId
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
    _id: ObjectId
    name: string
    cif: string
    J: string
    address: string
    type: CompanyType
}

export interface TaxItem {
    id: string
    name: string
    price: number
}

export const INITIAL_TAX: Tax = {
    _id: new ObjectId(),
    cif: '',
    mealPerDay: 0,
    tuition: 0,
    extraItems: [],

    workingDays: 0,
    absences: 0,
    mealTotal: 0,
    total: 0,
}

type CompanyType =
    | 'nursery'
    | 'kindergarten'
    | 'school'
    | 'gymnasium'
    | 'high-school'
    | 'university'
