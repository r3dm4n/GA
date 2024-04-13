import { Metadata } from './metadata'
import { Child, User } from './user'

export interface Group extends Metadata {
    _id: string
    sortId: number
    name: string
    imageUrl: string | null
    teachers: User[]
    children: Child[]
}
export const INITIAL_GROUP: Group = {
    _id: '',
    sortId: 0,
    name: '',
    createdAt: '',
    updatedAt: '',
    teachers: [],
    children: [],
    imageUrl: null,
}
