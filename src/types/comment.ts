import { Metadata } from './metadata'

export interface Comment extends Metadata {
    _id: string
    postId: string
    uid: string
    username: string
    avatar: string
    body: string
    hidden: boolean
}