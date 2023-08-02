export enum IpcamId {
    BEBE = '1',
    MICA = '2',
    MIJLOCIE = '3',
    MARE = '4',
}

export interface Ipcam {
    id: IpcamId
    name: string
    live: boolean
    message: string
    url: string
}