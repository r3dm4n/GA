import { Group } from './group'
import { Tag } from './post'
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
    tags: Tag[]
}

export const INITIAL_CONFIG: Config = {
    id: '',
    name: '',
    groups: [],
    tags: [],
    companies: [],
    monthWorkingDays: [],
    taxes: [],
}
