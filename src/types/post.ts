import { Attachment } from './attachment'
import { Comment } from './comment'
import { Poll } from './poll'
import { User } from './user'

export enum PostType {
    Post,
    Story,
}

export interface Post {
    _id: string | null
    type: PostType
    groupIds: string[]
    body: string
    attachments: Attachment[]
    reviewed: boolean
    author: User | string
    likedBy: User[] | string[]
    bookmarkedBy: User[] | string[]
    comments: Comment[]
    commentsOn: boolean
    liveAt: string | null
    poll: Poll | null
    sendNotification: boolean
    numberOfLikes: number
    numberOfBookmarks: number
    numberOfComments: number
    numberOfViews: number
}

export const INITIAL_POST: Post = {
    _id: null,
    type: PostType.Post,
    groupIds: [],
    body: '',
    attachments: [],
    reviewed: false,
    author: '',
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
    // createdAt: new Date().toISOString(),
    // updatedAt: new Date().toISOString(),
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
