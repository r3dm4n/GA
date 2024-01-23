import { Group } from './group'
import { Tax } from './tax'

export interface Payments {
    enabled: boolean
}


interface PostsConfig {
    tags: string[]
}

export interface Config {
    groups: Group[]
    payments: Payments
    posts: PostsConfig
    tax?: Tax
}

