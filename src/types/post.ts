import { Metadata } from './metadata'


export interface Attachment {
  fileName: string
  url: string
  blurhash: string
  id: number
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
  groupIds: string[]
  body: string
  attachments: Attachment[]
  reviewed: boolean
  author: string
  numberOfLikes: number
  likedBy: string[]
  comments: Comment[]
  commentsOn: boolean
  liveAt: string | null
  sendNotification: boolean
  numberOfComments: number
  numberOfViews: number
}

export const INITIAL_POST: Post = {
  id: undefined,
  groupIds: [],
  body: '',
  attachments: [],
  reviewed: false,
  author: '',
  numberOfLikes: 0,
  likedBy: [],
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