export interface OblioClient {
    cif: string
    name: string
    address: string
    contact: string
    phone: string
    email: string
}

export interface OblioProduct {
    item: string
    name: string
    description: string
    quantity: string
    price: string
    total: string
}

export interface OblioCollect {
    issueDate: string
    type: string
    number: string
    value: number
}

export interface OblioInvoiceDetail {
    documentType: string
    seriesName: string
    number: string
    total: string
    link: string
    collects: OblioCollect[]
}

export interface OblioInvoice {
    id: string
    draft: '-1' | '0' | '1'
    canceled: '0' | '1'
    collected: '0' | '1'
    seriesName: string
    number: string
    storno: '0' | '1'
    stornoed: '0' | '1'
    issueDate: string
    dueDate: string
    currency: string
    total: string
    link: string
    client: OblioClient
    products: OblioProduct[]
    detail?: OblioInvoiceDetail
}

export interface OblioInvoiceDetailRes {
    status: number
    statusMessage: string
    data: OblioInvoiceDetail
}

export interface OblioInvoiceRes {
    status: number
    statusMessage: string
    data: OblioInvoice[]
}

export interface GetInvoiceDto {
    email: string
    createdAt: string | null
    limit: number
}

export interface GetInvoicesRes {
    invoices: OblioInvoice[]
    hasNext: boolean
    createdAt: string
}

export interface OblioInvoiceState {
    invoices: OblioInvoice[]
    uid: string | undefined
    saving: boolean
    loading: boolean
    refreshing: boolean
    paginating: boolean
    hasNext: boolean
    createdAt: string | undefined
    error: string | undefined
}

export interface InvoiceDTO {
    seriesName: string
    number: string
    email?: string
}

export interface OblioTokenRes {
    access_token: string
    expires_in: number
    token_type: 'Bearer'
    scope: null
    request_time: number
}
