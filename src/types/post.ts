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
    postTags: { tagId: Partial<Tag> }[]
    postGroups: { groupId: Partial<Group> }[]
    postLikes: { userId: Partial<User> }[]
    postBookmarks: { userId: Partial<User> }[]
    reviewed: boolean
    authorId: string
    attachments: Attachment[]
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

    attachments: [],
    postGroups: [],
    postLikes: [],
    postBookmarks: [],
    postTags: [],
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
