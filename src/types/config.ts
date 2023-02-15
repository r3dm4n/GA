import { Tax } from './tax'

export interface Payments {
    enabled: boolean
}
export interface Config {
    payments: Payments
    tax: Tax
}
