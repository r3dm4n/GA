import { Metadata } from './metadata'

export interface Thumbnail extends Metadata {
    url: string
    blurhash: string
    favorite: boolean
    videoId: string
}

export interface Video extends Metadata {
    attachmentId: string
    optimized: string
    original: string
    thumbnails: Thumbnail[]
}

export interface Attachment extends Metadata {
    postId: string
    fileName: string
    imageUrl: string
    blurhash: string
    width: number
    height: number
    type: 'image' | 'video'
    video: Video | null
    file?: Express.Multer.File
}
