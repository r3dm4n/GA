import { Group } from './group'
import { Ipcam } from './ipcam'
import { INITIAL_METADATA, Metadata } from './metadata'
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
    email: string
    username: string
    password: string | null
    avatar: string | null
    blurhash: string | null
    role: Role
    disabled: boolean
    canComment: boolean
    tokens: string[]
    groups: string[]
    ipcams: string[]
    children: string[]
    adults: string[]
    expand: {
        groups: Group[]
        ipcams: Ipcam[]
        children: Child[]
        adults: Adult[]
    }
    votedChoices: string[]
    writtenPosts: string[]
    bookmarkedPosts: string[]
    likedPosts: string[]
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
    userId: string
    type: AdultType
    phone: number
    invoicePayer: boolean
}

export interface Child extends Human, Metadata {
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
    created: string
    role: Role
    groupIds: string[]
}

export const INITIAL_CHILD: Child = {
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

    ...INITIAL_METADATA,
}

export const INITIAL_PARENT: Adult = {
    firstName: '',
    lastName: '',
    phone: 0,
    invoicePayer: false,
    cnp: '',
    gender: Gender.M,
    address: '',
    type: AdultType.PARENT,
    userId: '',
    ...INITIAL_METADATA,
}

export const INITIAL_USER: User = {
    email: '',
    password: '',
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

    expand: {
        groups: [],
        ipcams: [],
        children: [],
        adults: [],
    },
    ...INITIAL_METADATA,
}

export const generateAdult = (): Adult => {
    return {
        ...INITIAL_PARENT,
        ...INITIAL_METADATA,
    }
}

export const generateChild = (): Child => {
    return {
        ...INITIAL_CHILD,
        ...INITIAL_METADATA,
    }
}

export const generateUser = (): User => {
    const generateAdults = [generateAdult(), generateAdult()]
    return {
        ...INITIAL_USER,
        children: [],
        adults: generateAdults.map((adult) => adult.id),
        expand: {
            adults: generateAdults,
            groups: [],
            ipcams: [],
            children: [],
        },
    }
}
