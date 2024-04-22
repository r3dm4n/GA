export interface Thumbnail {
    id: string
    url: string
    blurhash: string
    favorite: boolean
    videoId: string
}

export interface Video {
    id: string
    attachmentId: string
    optimized: string
    original: string
    thumbnails: Thumbnail[]
}

export interface Attachment {
    id: string
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
