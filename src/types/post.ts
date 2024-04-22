import { Attachment } from './attachment'
import { Comment } from './comment'
import { Group } from './group'
import { Metadata } from './metadata'
import { Poll } from './poll'
import { INITIAL_USER, User } from './user'

export enum PostType {
    Post,
    Story,
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
    tags: Tag[]
    groups: Group[]
    attachments: Attachment[]
    reviewed: boolean
    authorId: string
    author?: User
    likedBy: Partial<User[]>
    bookmarkedBy: Partial<User[]>
    comments: Comment[]
    poll: Poll | null
}

export interface Tag {
    id: string
    name: string
    configId: string
    posts: Post[]
}

export const INITIAL_POST: Post = {
    id: null,
    type: PostType.Post,
    groups: [],
    body: '',
    attachments: [],
    reviewed: false,
    likedBy: [],
    bookmarkedBy: [],
    comments: [],
    commentsOn: true,
    liveAt: null,
    sendNotification: true,
    poll: null,
    numberOfLikes: 0,
    numberOfBookmarks: 0,
    numberOfComments: 0,
    numberOfViews: 0,
    tags: [],
    authorId: '',
    author: INITIAL_USER,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
}

export interface GetPostDto {
    createdAt: string | null
    reviewed: boolean | null
    limit: number
}

export interface GetPostResponse {
    posts: Post[]
    hasNext: boolean
    createdAt: string | null
}
