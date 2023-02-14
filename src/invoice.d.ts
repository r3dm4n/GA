import { Metadata } from './metadata';
import { Tax } from './tax';
import { User } from './user';
export declare const INVOICE_LIMIT = 10;
export interface InvoiceItem {
    id: string;
    name: string;
    amount: number;
}
export declare const INITIAL_INVOICE_ITEM: InvoiceItem;
export declare enum InvoiceStatus {
    UNPAYED = "UNPAYED",
    CASH = "CASH",
    CARD = "CARD",
    BANK = "BANK"
}
export interface Invoice extends Metadata {
    childId: string | undefined;
    id: string | undefined;
    shortId: string | undefined;
    intentId: string | undefined;
    description: string | undefined;
    uid: string;
    date: string;
    absences: number;
    items: InvoiceItem[];
    total: number;
    status: InvoiceStatus;
    payedAt: string | undefined;
    timestamp: Date;
    receiptUrl: string | null;
    stripeId: string | null;
}
export interface InvoiceRes {
    invoices: Invoice[];
    hasNext: boolean;
    createdAt: string | undefined;
}
export declare const INITIAL_INVOICE: Invoice;
export interface InvoiceState {
    invoices: Invoice[];
    uid: string | undefined;
    saving: boolean;
    loading: boolean;
    deleting: boolean;
    refreshing: boolean;
    paginating: boolean;
    hasNext: boolean;
    createdAt: string | undefined;
    error: string | undefined;
}
export interface PaymentIntentResponse {
    paymentIntentClientSecret: string;
    paymentIntent: string;
    ephemeralKey: string;
    customer: string;
    publishableKey: string;
}
export declare const generateInvoices: (user: User, tax: Tax) => Invoice[];
