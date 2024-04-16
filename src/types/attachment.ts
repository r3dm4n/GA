import { ObjectId } from 'mongodb'

export interface Thumbnail {
    _id: ObjectId
    url: string
    favorite: boolean
    blurhash: string
}

export interface Video {
    optimized: string
    original: string
    thumbnails: Thumbnail[]
}

export interface Attachment {
    _id: ObjectId | null
    sortId: number
    postIds: []
    fileName: string
    imageUrl: string
    video: Video | null
    blurhash: string
    width: number
    height: number
    type: 'image' | 'video'
    file?: Express.Multer.File
}
