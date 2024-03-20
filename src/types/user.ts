import { generateUUID } from '../lib/helpers'
import { IpcamId } from './ipcam'
import { Metadata } from './metadata'
import { CIF } from './tax'

type Gender = 'M' | 'F'

export interface Human {
    firstName: string
    lastName: string
    cnp: string
    gender: Gender | null
    address: string
}

export interface Adult extends Human, Metadata {
    id: string
    phoneNumber: string
    state: string
    city: string
    country: string
    nationality?: string
    citizenship?: string
    signature?: string
    invoicePayer: boolean
}

export interface Child extends Human, Metadata {
    avatar: string | null
    blurhash: string | null
    uid: string
    id: string
    placeOfBirth: string
    groupId: string
    birthday: string
    schedule: Schedule
    cif: CIF
}

export interface User extends Metadata {
    uid: string
    avatar: string | null
    blurhash: string | null
    customerId: string | null
    email: string
    username: string
    displayName: string
    password: string
    role: Role
    parents: Adult[]
    emergencyContacts: Adult[]
    children: Child[]
    groupIds: string[]
    tokens: string[]
    ipcams: IpcamId[]
    disabled: boolean
    canComment: boolean
    bookmarks: string[]
}

export enum BelogsTo {
    NURSERY,
    KINDERGARTEN,
}

export enum Role {
    PARENT = 'PARENT',
    TEACHER = 'TEACHER',
    ADMIN = 'ADMIN',
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
    email: string
    createdAt: string
    role: Role
    groupIds: string[]
}
const INITIAL_CIF: CIF = { name: '', value: '' }

export const INITIAL_CHILD: Child = {
    gender: null,
    avatar: null,
    blurhash: null,
    address: '',
    uid: '',
    id: '',
    cnp: '',
    placeOfBirth: '',
    groupId: 'PUBLIC',
    birthday: '',
    schedule: Schedule.LONG,
    firstName: '',
    lastName: '',
    createdAt: '',
    updatedAt: '',
    cif: INITIAL_CIF,
}

export const INITIAL_PARENT: Adult = {
    gender: null,
    invoicePayer: false,
    id: '',
    phoneNumber: '',
    address: '',
    state: '',
    city: '',
    country: '',
    firstName: '',
    lastName: '',
    cnp: '',
    createdAt: '',
    updatedAt: '',
    signature: '',
    citizenship: '',
    nationality: '',
}

export const INITIAL_USER: User = {
    avatar: null,
    blurhash: null,
    parents: [],
    children: [],
    emergencyContacts: [],
    customerId: null,
    uid: '',
    displayName: '',
    username: '',
    email: '',
    password: '',
    role: Role.PARENT,
    groupIds: ['PUBLIC'],
    tokens: [],
    ipcams: [],
    disabled: false,
    canComment: true,
    createdAt: '',
    updatedAt: '',
    bookmarks: [],
}

export const generateAdult = (): Adult => {
    return {
        ...INITIAL_PARENT,
        id: generateUUID(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    }
}

export const generateChild = (): Child => {
    return {
        ...INITIAL_CHILD,
        id: generateUUID(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    }
}

export const generateUser = (): User => {
    return {
        ...INITIAL_USER,
        children: [
            {
                ...INITIAL_CHILD,
                id: generateUUID(),
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
        ],
        parents: [generateAdult(), generateAdult()],
        emergencyContacts: [generateAdult()],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    }
}

