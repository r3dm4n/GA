import { ObjectId } from 'mongodb'

export interface Ipcam {
    _id: ObjectId
    name: string
    live: boolean
    message: string
    url: string
}
