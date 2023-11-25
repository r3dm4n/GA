import { Metadata } from './metadata'

export enum PostType {
    Post,
    Story,
}

interface Thumbnail {
    url: string
    favorite: boolean
}

export interface Attachment {
    id?: string
    sortId: number
    fileName: string
    url: string
    videoUrl?: string
    thumbnails: Thumbnail[]
    blurhash: string
    width: number
    height: number
    type: 'image' | 'video'
}
export interface Comment extends Metadata {
  id?: string
  postId: string
  uid: string
  displayName: string
  avatar: string
  body: string
  hidden: false
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