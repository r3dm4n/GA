import { generateNumberID } from '../lib/helpers'
import { Group } from './group'
import { Ipcam } from './ipcam'
import { Metadata } from './metadata'
import { Choice } from './poll'
import { Post } from './post'
import { TaxItem } from './tax'

type Gender = 'M' | 'F'

export interface User extends Metadata {
    id: number | null
    email: string
    username: string
    displayName: string | null
    avatar: string | null
    blurhash: string | null
    role: Role
    disabled: boolean
    canComment: boolean
    tokens: string[]
    groups: Group[]
    ipcams: Ipcam[]
    children: Child[]
    parents: Adult[]
    emergency: Adult[]
    votedChoices: Choice[]
    bookmarkedPosts: Post[]
    likedPosts: Post[]
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
    id: number
    phone: number
    invoicePayer: boolean
    parentId: number
    emergencyId: number
}

export interface Child extends Human, Metadata {
    id: number
    birthday: string
    avatar: string | null
    blurhash: string | null
    schedule: Schedule
    cif: string
    placeOfBirth: string
    extras: TaxItem[]
    userId: number
    groupId: number
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

export interface DecodedUser {
    uid: string
    username: string
    email: string
    createdAt: string
    role: Role
    groupIds: number[]
}

export const INITIAL_CHILD: Child = {
    id: generateNumberID(),

    nationality: 'Romana',
    birthday: '',
    avatar: null,
    blurhash: null,
    schedule: Schedule.LONG,
    cif: '',
    placeOfBirth: '',
    extras: [],
    userId: 0,
    groupId: 0,
    firstName: '',
    lastName: '',
    cnp: '',
    gender: 'M',
    address: '',
    createdAt: '',
    updatedAt: '',
}

export const INITIAL_PARENT: Adult = {
    id: generateNumberID(),
    phone: 0,
    invoicePayer: false,
    parentId: 0,
    emergencyId: 0,
    firstName: '',
    lastName: '',
    cnp: '',
    gender: 'M',
    address: '',
    createdAt: '',
    updatedAt: '',
}

export const INITIAL_USER: User = {
    id: null,
    email: '',
    username: '',
    displayName: null,
    avatar: null,
    blurhash: null,
    role: Role.PARENT,
    disabled: false,
    canComment: false,
    tokens: [],
    groups: [],
    ipcams: [],
    children: [],
    parents: [],
    emergency: [],
    votedChoices: [],
    bookmarkedPosts: [],
    likedPosts: [],
    createdAt: '',
    updatedAt: '',
}

export const generateAdult = (): Adult => {
    return {
        ...INITIAL_PARENT,
        id: generateNumberID(),
    }
}

export const generateChild = (): Child => {
    return {
        ...INITIAL_CHILD,
        id: generateNumberID(),
    }
}

export const generateUser = (): User => {
    return {
        ...INITIAL_USER,
        children: [
            {
                ...INITIAL_CHILD,
                id: generateNumberID(),
            },
        ],
        parents: [generateAdult(), generateAdult()],
        emergency: [generateAdult()],
    }
}
