export interface Thumbnail {
    id: number
    url: string
    favorite: boolean
    blurhash: string
}

export enum Quality {
    '360p' = 360,
    '480p' = 480,
    '720p' = 720,
    '1080p' = 1080,
    '2160p' = 2160,
}

export enum Resolution {
    '2160p' = '3840:2160',
    '1080p' = '1920:1080',
    '720p' = '1280:720',
    '480p' = '854:480',
    '360p' = '480:360',
}

interface VideoSource {
    url: string
    quality: Quality
}

export interface Video {
    sources: VideoSource[]
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
