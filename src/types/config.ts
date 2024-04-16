import { ObjectId } from 'mongodb'
import { Group } from './group'
import { Company, Tax } from './tax'
import { WorkingDays } from './working-days'

export interface Payments {
    enabled: boolean
}

export interface Config {
    _id: ObjectId
    name: string
    groups: Group[]
    companies: Company[]
    taxes: Tax[]
    workingDays: WorkingDays[]
    paymentsEnabled: boolean
    tags: string[]
}

export const INITIAL_CONFIG: Config = {
    _id: new ObjectId(),
    name: '',
    groups: [],
    paymentsEnabled: false,
    tags: [],
    companies: [],
    workingDays: [],
    taxes: [],
}
