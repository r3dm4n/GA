export declare enum IpcamId {
    BEBE = "1",
    MICA = "2",
    MIJLOCIE = "3",
    MARE = "4"
}
export interface Ipcam {
    id: IpcamId;
    live: boolean;
    message: string;
    url: string;
}
