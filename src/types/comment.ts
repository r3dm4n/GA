import { Metadata } from './metadata'

export interface Comment extends Metadata {
    id?: string
    postId: string
    uid: string
    displayName: string
    avatar: string
    body: string
    hidden: false
}
