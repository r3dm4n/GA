import { Metadata } from './metadata'
import { User } from './user'
import { ObjectId } from 'mongodb'


export interface Comment extends Metadata {
    _id: ObjectId
    postId: string
    user: User
    body: string
    hidden: boolean
}