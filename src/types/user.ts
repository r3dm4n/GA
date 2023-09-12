import { generateUUID } from '../lib/helpers'
import { IpcamId } from './ipcam'
import { Metadata } from './metadata'

export interface Human {
    firstName: string
    lastName: string
}

export interface Adult extends Human, Metadata {
    id: string
    phoneNumber: string
    address: string
    nationality?: string
    citizenship?: string
    signature?: string
}

export interface Child extends Human, Metadata {
    avatar: string | null
    blurhash: string | null
    uid: string
    id: string
    cnp: string
    placeOfBirth: string
    groupId: string
    birthday: string
    schedule: Schedule
}

export interface User extends Metadata {
    uid: string
    avatar: string | null
    blurhash: string | null
    customerId: string | null
    email: string
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

export interface DecodedUser  {
    uid: string
    email: string
    createdAt: string
    role: Role
    groupIds: string[]
}



export const INITIAL_CHILD: Child = {
    avatar: null,
    blurhash: null,
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
}

export const INITIAL_PARENT: Adult = {
    id: '',
    phoneNumber: '',
    address: '',
    firstName: '',
    lastName: '',
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

