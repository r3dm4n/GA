import { generateUUID } from '../lib/helpers'
import { IpcamId } from './ipcam'
import { Metadata } from './metadata'
import { TaxItem } from './tax'

type Gender = 'M' | 'F'

export interface Human {
    firstName: string
    lastName: string
    cnp: string
    gender: Gender | null
    address: string
    nationality?: string
    citizenship?: string
}

export interface Adult extends Human, Metadata {
    _id: string
    uid: string
    phoneNumber: string
    state: string
    city: string
    country: string
    signature?: string
    invoicePayer: boolean
}

export interface Child extends Human, Metadata {
    _id: string
    avatar: string | null
    blurhash: string | null
    uid: string
    placeOfBirth: string
    groupId: string
    birthday: string
    schedule: Schedule
    cif: string
    extras: TaxItem[]
}

export interface User extends Metadata {
    _id: string | null
    uid: string
    avatar: string | null
    blurhash: string | null
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

export const INITIAL_CHILD: Child = {
    _id: '',
    uid: '',
    gender: null,
    avatar: null,
    blurhash: null,
    address: '',
    cnp: '',
    placeOfBirth: '',
    groupId: 'PUBLIC',
    birthday: '',
    schedule: Schedule.LONG,
    firstName: '',
    lastName: '',
    createdAt: '',
    updatedAt: '',
    cif: '',
    extras: [],
    citizenship: 'Romana',
    nationality: 'Romana',
}

export const INITIAL_PARENT: Adult = {
    _id: '',
    uid: '',
    gender: null,
    invoicePayer: false,
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
    citizenship: 'Romana',
    nationality: 'Romana',
}

export const INITIAL_USER: User = {
    _id: null,
    avatar: null,
    blurhash: null,
    parents: [],
    children: [],
    emergencyContacts: [],
    uid: '',
    displayName: '',
    username: '',
    email: '',
    password: '',
    role: Role.PARENT,
    groupIds: [],
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
        _id: generateUUID(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    }
}

export const generateChild = (): Child => {
    return {
        ...INITIAL_CHILD,
        _id: generateUUID(),
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
                _id: generateUUID(),
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

