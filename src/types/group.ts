import { generateUUID } from '../lib/helpers'
import { Metadata } from './metadata'
import { Child, User } from './user'

export interface Group extends Metadata {
    id: string
    sortId: number
    name: string
    imageUrl: string | null
    teachers: User[]
    children: Child[]
}
export const INITIAL_GROUP: Group = {
    id: generateUUID(),
    sortId: 0,
    name: '',
    teachers: [],
    children: [],
    imageUrl: null,
    createdAt: '',
    updatedAt: '',
}
