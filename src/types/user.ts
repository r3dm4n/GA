import { Group } from './group'
import { Ipcam } from './ipcam'
import { Metadata } from './metadata'
import { Choice } from './poll'
import { Post } from './post'
import { TaxItem } from './tax'


export enum Gender {
    M = 'M',
    F = 'F',
}

export enum AdultType {
    PARENT = 'PARENT',
    EMERGENCY = 'EMERGENCY',
}

export enum Role {
    ADMIN = 'ADMIN',
    TEACHER = 'TEACHER',
    PARENT = 'PARENT',
}

export enum Schedule {
    LONG = 'LONG',
    SHORT = 'SHORT',
    SHORT_WITH_LUNCH = 'SHORT_WITH_LUNCH',
}

export enum UserType {
    ALL = 'ALL',
    ACTIVE = 'ACTIVE',
    DISABLED = 'DISABLED',
}


export interface User extends Metadata {
    id: string | null
    email: string
    username: string
    password: string
    avatar: string | null
    blurhash: string | null
    role: Role
    disabled: boolean
    canComment: boolean
    tokens: string[]
    groups: Group[]
    ipcams: Ipcam[]
    children: Child[]
    votedChoices: Choice[]
    writtenPosts: Post[]
    bookmarkedPosts: Post[]
    likedPosts: Post[]
    adults: Adult[]
    createdAt: string
    updatedAt: string
}

export interface Human {
    firstName: string
    lastName: string
    cnp: string
    gender: Gender
    address: string
    nationality?: string
    citizenship?: string
}

export interface Adult extends Human, Metadata {
    id: string | null
    userId: string
    type: AdultType
    phone: number
    invoicePayer: boolean
}

export interface Child extends Human, Metadata {
    id: string | null
    birthday: string
    avatar: string | null
    blurhash: string | null
    schedule: Schedule
    cif: string
    placeOfBirth: string
    extras: TaxItem[]
    userId: string | null
    groupId: string | null
}

export interface DecodedUser {
    uid: string
    username: string
    email: string
    createdAt: string
    role: Role
    groupIds: string[]
}

export const INITIAL_CHILD: Child = {
    id: null,
    nationality: 'Romana',
    birthday: '',
    avatar: null,
    blurhash: null,
    schedule: Schedule.LONG,
    cif: '',
    placeOfBirth: '',
    extras: [],
    userId: null,
    groupId: null,
    firstName: '',
    lastName: '',
    cnp: '',
    gender: Gender.M,
    address: '',
    createdAt: '',
    updatedAt: '',
}

export const INITIAL_PARENT: Adult = {
    id: null,
    firstName: '',
    lastName: '',
    phone: 0,
    invoicePayer: false,
    cnp: '',
    gender: Gender.M,
    address: '',
    type: AdultType.PARENT,
    userId: '',
    createdAt: '',
    updatedAt: '',
}

export const INITIAL_USER: User = {
    id: null,
    email: '',
    username: '',
    avatar: null,
    blurhash: null,
    role: Role.PARENT,
    disabled: false,
    canComment: false,
    tokens: [],
    groups: [],
    ipcams: [],
    children: [],
    adults: [],
    votedChoices: [],
    writtenPosts: [],
    bookmarkedPosts: [],
    likedPosts: [],
    createdAt: '',
    updatedAt: '',
    password: '',
}

export const generateAdult = (): Adult => {
    return {
        ...INITIAL_PARENT,
        id: null,
    }
}

export const generateChild = (): Child => {
    return {
        ...INITIAL_CHILD,
        id: null,
    }
}

export const generateUser = (): User => {
    return {
        ...INITIAL_USER,
        children: [
            {
                ...INITIAL_CHILD,
                id: null,
            },
        ],
        adults: [generateAdult(), generateAdult()],
    }
}
