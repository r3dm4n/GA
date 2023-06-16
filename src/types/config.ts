import { Tax } from './tax'

export interface Payments {
    enabled: boolean
}

interface GroupNames {
    name: string
    nickname: string
}

export interface GroupConfig {
    names: GroupNames[]
}

export interface Config {
    payments: Payments
    tax: Tax
    groupConfig: GroupConfig
}
