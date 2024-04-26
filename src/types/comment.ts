import { Metadata } from './metadata'
import { User } from './user'

export interface Comment extends Metadata {
    postId: string
    body: string
    hidden: boolean
    author: string
    likedBy: string[]
    expand: {
        author: Partial<User>
        likedBy: Partial<User>[]
    }
}
