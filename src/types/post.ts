import { Attachment } from './attachment'
import { Group } from './group'
import { Metadata } from './metadata'
import { Poll } from './poll'
import { User } from './user'

export enum PostType {
    POST,
    STORY,
}

export interface Post extends Metadata {
    id: string | null
    type: PostType
    body: string
    numberOfLikes: number
    numberOfBookmarks: number
    numberOfComments: number
    numberOfViews: number
    liveAt: string | null
    sendNotification: boolean
    commentsOn: boolean
    tags: string[]
    groups: string[]
    likes: string[]
    bookmarks: string[]
    reviewed: boolean
    authorId: string
    attachments: string[]
    poll: Poll | null
    expand: {
        attachments: Attachment[]
        tags: Tag[]
        groups: Group[]
        likes: User[]
        bookmarks: User[]
    }
}

export interface Tag {
    id: string
    name: string
    configId: string
    posts: Post[]
}

export const INITIAL_POST: Post = {
    id: null,
    type: PostType.POST,
    body: '',
    reviewed: false,
    commentsOn: true,
    liveAt: null,
    sendNotification: true,
    poll: null,
    numberOfLikes: 0,
    numberOfBookmarks: 0,
    numberOfComments: 0,
    numberOfViews: 0,
    authorId: '',
    tags: [],
    groups: [],
    likes: [],
    bookmarks: [],
    attachments: [],
    expand: {
        attachments: [],
        tags: [],
        groups: [],
        likes: [],
        bookmarks: [],
    },
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
}

export interface GetPostDto {
    created: string | null
    reviewed: boolean | null
    limit: number
}

export interface GetPostResponse {
    posts: Post[]
    hasNext: boolean
    created: string | null
}
