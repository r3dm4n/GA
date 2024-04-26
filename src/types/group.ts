import { Config } from './config'
import { INITIAL_METADATA, Metadata } from './metadata'
import { Post } from './post'
import { Presence } from './presence'
import { Child, User } from './user'

export interface Group extends Metadata {
    name: string
    users: User[]
    posts: Post[]
    children: Child[]
    presences: Presence[]
    config?: Config
}
export const INITIAL_GROUP: Group = {
    name: '',
    users: [],
    posts: [],
    children: [],
    presences: [],
    ...INITIAL_METADATA,
}

