export enum IpcamId {
    BEBE,
    MICA,
    MIJLOCIE,
    MARE,
}

export interface Ipcam {
    id: IpcamId
    name: string
    live: boolean
    message: string
    url: string
}