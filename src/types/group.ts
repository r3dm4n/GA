import { Metadata } from './metadata'

export interface Group extends Metadata {
    _id: string
    name: string
    description: string
}
export const INITIAL_GROUP: Group = {
    _id: '',
    name: '',
    description: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
}
