import { ObjectId } from 'mongodb'
import { Attachment } from './attachment'
import { Comment } from './comment'
import { Group } from './group'
import { Metadata } from './metadata'
import { Poll } from './poll'

export enum PostType {
    Post,
    Story,
}

export interface Post extends Metadata {
    _id: ObjectId | null
    type: PostType
    groups: Group[]
    body: string
    attachments: Attachment[]
    reviewed: boolean
    author: string
    likedBy: string[]
    bookmarkedBy: string[]
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
    groups: [],
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
