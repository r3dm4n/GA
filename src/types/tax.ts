import { generateUUID } from '../lib/helpers'

export interface Tax {
    id: string
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
    id: string
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
    id: generateUUID(),
    cif: '',
    mealPerDay: 0,
    tuition: 0,
    extraItems: [],

    workingDays: 0,
    absences: 0,
    mealTotal: 0,
    total: 0,
}

export enum CompanyType {
    NURSERY = 'NURSERY',
    KINDERGARTEN = 'KINDERGARTEN',
    SCHOOL = 'SCHOOL',
    GYMNASIUM = 'GYMNASIUM',
    HIGHSCHOOL = 'HIGHSCHOOL',
    UNIVERSITY = 'UNIVERSITY',
}

