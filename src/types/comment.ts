import { Metadata } from './metadata'
import { User } from './user'

export interface Comment extends Metadata {
    _id: string
    postId: string
    user: User
    body: string
    hidden: boolean
}