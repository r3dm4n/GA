import { generateUUID } from '../lib/helpers'
import { Group } from './group'
import { Company, Tax } from './tax'
import { WorkingDays } from './working-days'

export interface Payments {
    enabled: boolean
}

export interface Config {
    id: string
    name: string
    groups: Group[]
    companies: Company[]
    taxes: Tax[]
    monthWorkingDays: WorkingDays[]
    tags: string[]
}

export const INITIAL_CONFIG: Config = {
    id: generateUUID(),
    name: '',
    groups: [],
    tags: [],
    companies: [],
    monthWorkingDays: [],
    taxes: [],
}
