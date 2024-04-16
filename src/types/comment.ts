import { Metadata } from './metadata'
import { User } from './user'


export interface Comment extends Metadata {
    id: string
    postId: string
    user: User
    body: string
    hidden: boolean
}