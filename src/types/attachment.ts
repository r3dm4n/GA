export interface Thumbnail {
    _id: string
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
    _id: string | null
    sortId: number
    fileName: string
    imageUrl: string
    video: Video | null
    blurhash: string
    width: number
    height: number
    type: 'image' | 'video'
    file?: Express.Multer.File
}
