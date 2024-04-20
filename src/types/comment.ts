import { Metadata } from './metadata'
import { Post } from './post'
import { User } from './user'

export interface Comment extends Metadata {
    id: number
    postId: number
    post?: Post
    userId: Number
    user?: User
    body: string
    hidden: boolean
    likedBy: Partial<User[]>
}