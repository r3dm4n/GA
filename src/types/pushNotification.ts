export enum NotificationType {
    NEW_POST = 'NEW_POST',
    COMMENT = 'COMMENT',
    INVOICE = 'INVOICE',
}

export interface PushNotification {
    title: string
    body?: string
    data?: any
}
