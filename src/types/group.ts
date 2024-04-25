import { Config } from './config'
import { Metadata } from './metadata'
import { Post } from './post'
import { Presence } from './presence'
import { Child, User } from './user'

export interface Group extends Metadata {
    id: string
    name: string
    users: User[]
    posts: Post[]
    children: Child[]
    presences: Presence[]
    config?: Config
}
export const INITIAL_GROUP: Group = {
    id: '',
    name: '',
    users: [],
    posts: [],
    children: [],
    presences: [],
    created: '',
    updated: '',
}
