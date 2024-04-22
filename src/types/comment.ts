import { Metadata } from './metadata'
import { Post } from './post'
import { User } from './user'

export interface Comment extends Metadata {
    id: string
    postId: string
    post?: Post
    userId: string
    user?: User
    body: string
    hidden: boolean
    likedBy: Partial<User[]>
}