export interface Thumbnail {
    id: number
    url: string
    blurhash: string
    favorite: boolean
    videoId: number
}

export interface Video {
    id: number
    attachmentId: number
    optimized: string
    original: string
    thumbnails: Thumbnail[]
}

export interface Attachment {
    id: number
    postId: number
    fileName: string
    imageUrl: string
    blurhash: string
    width: number
    height: number
    type: 'image' | 'video'
    video: Video | null
    file?: Express.Multer.File
}
