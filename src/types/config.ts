import { Group } from './group'
import { Tax } from './tax'

export interface Payments {
    enabled: boolean
}


export interface Config {
    groups: Group[]
    payments: Payments
    tax?: Tax
}

