import { Tax } from './tax'

export interface Payments {
    enabled: boolean
}


export interface Config {
    groups: Group[]
    payments: Payments
    tax?: Tax
}

export interface Group  {
    id: string
    name: string
    profileUrl: string
    backgroundUrl: string
    teacherId: string
}