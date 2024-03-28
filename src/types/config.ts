import { Group } from './group'
import { Company, INITIAL_TAX, Tax } from './tax'
import { INITIAL_WORKING_DAYS, WorkingDays } from './working-days'

export interface Payments {
    enabled: boolean
}

export interface Config {
    groups: Group[]
    paymentsEnabled: boolean
    tags: string[]
    companies: Company[]
    taxes: Tax[]
    workingDays: WorkingDays[]
}



export const INITIAL_CONFIG: Config = {
    groups: [],
    paymentsEnabled: false,
    tags: [],
    companies: [],
    workingDays: INITIAL_WORKING_DAYS,
    taxes: [],
}