import { Attachment } from './attachment'
import { Comment } from './comment'
import { Metadata } from './metadata'
import { Poll } from './poll'

export enum PostType {
    Post,
    Story,
}

export interface Post extends Metadata {
    id?: string
    type: PostType
    groupIds: string[]
    body: string
    attachments: Attachment[]
    reviewed: boolean
    author: string
    likedBy: string[]
    bookmarkedBy: string[]
    numberOfLikes: number
    numberOfBookmarks: number
    comments: Comment[]
    commentsOn: boolean
    liveAt: string | null
    poll: Poll | null
    sendNotification: boolean
    numberOfComments: number
    numberOfViews: number
}

export const INITIAL_POST: Post = {
    id: undefined,
    type: PostType.Post,
    groupIds: [],
    body: '',
    attachments: [],
    reviewed: false,
    author: '',
    numberOfLikes: 0,
    likedBy: [],
    bookmarkedBy: [],
    numberOfBookmarks: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    numberOfComments: 0,
    numberOfViews: 0,
    comments: [],
    commentsOn: true,
    liveAt: null,
    sendNotification: true,
    poll: null,
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
