import { Group } from './group'
import { Company, Tax } from './tax'
import {  WorkingDays } from './working-days'

export interface Payments {
    enabled: boolean
}

export interface Config {
    _id: string
    name: string
    groups: Group[]
    paymentsEnabled: boolean
    tags: string[]
    companies: Company[]
    taxes: Tax[]
    workingDays: WorkingDays[]
}

export const INITIAL_CONFIG: Config = {
    _id: '',
    name: '',
    groups: [],
    paymentsEnabled: false,
    tags: [],
    companies: [],
    workingDays: [],
    taxes: [],
}