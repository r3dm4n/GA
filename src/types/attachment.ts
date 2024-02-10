export interface Thumbnail {
    id: number
    url: string
    favorite: boolean
    blurhash: string
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
    file?: Express.Multer.File
}
