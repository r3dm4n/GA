export interface Thumbnail {
    id: number
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
    id?: string
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
