
import { generateUUID } from '../lib/helpers'
import { Metadata } from './metadata'

export const INVOICE_LIMIT = 10

export interface InvoiceItem {
    id: string
    name: string
    amount: number
}

export const INITIAL_INVOICE_ITEM: InvoiceItem = {
    id: generateUUID(),
    name: '',
    amount: 0,
}

export enum InvoiceStatus {
    UNPAYED = 'UNPAYED',
    CASH = 'CASH',
    CARD = 'CARD',
    BANK = 'BANK',
}

export interface Invoice extends Metadata {
    childId: string | undefined
    id: string | undefined
    shortId: string | undefined
    intentId: string | undefined
    description: string | undefined
    uid: string
    date: string
    absences: number
    items: InvoiceItem[]
    total: number
    status: InvoiceStatus
    receiptUrl: string | null
    stripeId: string | null
    timestamp: Date
    payedAt: string | null
    dueAt: string | null
}

export interface InvoiceRes {
    invoices: Invoice[]
    hasNext: boolean
    createdAt: string | undefined
}

export const INITIAL_INVOICE: Invoice = {
    id: undefined,
    childId: undefined,
    shortId: undefined,
    intentId: undefined,
    description: undefined,
    uid: '',
    absences: 0,
    total: 0,
    items: [INITIAL_INVOICE_ITEM],
    status: InvoiceStatus.UNPAYED,
    payedAt: null,
    date: new Date().toISOString().slice(0, 10),
    timestamp: new Date(),
    createdAt: '',
    updatedAt: '',
    dueAt: null,
    receiptUrl: null,
    stripeId: null,
}

export interface InvoiceState {
    invoices: Invoice[]
    uid: string | undefined
    saving: boolean
    loading: boolean
    deleting: boolean
    refreshing: boolean
    paginating: boolean
    hasNext: boolean
    createdAt: string | undefined
    error: string | undefined
}

export interface PaymentIntentResponse {
    paymentIntentClientSecret: string
    paymentIntent: string
    ephemeralKey: string
    customer: string
    publishableKey: string
}

