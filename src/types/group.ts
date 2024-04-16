import { ObjectId } from 'mongodb'
import { Metadata } from './metadata'
import { Child, User } from './user'

export interface Group extends Metadata {
    _id: ObjectId
    sortId: number
    name: string
    imageUrl: string | null
    teachers: User[]
    children: Child[]
}
export const INITIAL_GROUP: Group = {
    _id: new ObjectId(),
    sortId: 0,
    name: '',
    teachers: [],
    children: [],
    imageUrl: null,
    createdAt: '',
    updatedAt: '',
}
