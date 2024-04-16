import { ObjectId } from 'mongodb'
import { Group, INITIAL_GROUP } from './group'
import { Ipcam } from './ipcam'
import { Metadata } from './metadata'
import { Post } from './post'
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
    _id: ObjectId
    uid: string
    phoneNumber: string
    state: string
    city: string
    country: string
    signature?: string
    invoicePayer: boolean
}

export interface Child extends Human, Metadata {
    _id: ObjectId
    uid: string
    avatar: string | null
    blurhash: string | null
    placeOfBirth: string
    group: Group
    birthday: string
    schedule: Schedule
    cif: string
    extras: TaxItem[]
}

export interface User extends Metadata {
    _id: ObjectId | null
    uid: string
    email: string
    username: string
    displayName: string
    avatar: string | null
    blurhash: string | null
    password: string
    role: Role
    parents: Adult[]
    emergencyContacts: Adult[]
    children: Child[]
    groups: Group[]
    tokens: string[]
    ipcams: Ipcam[]
    disabled: boolean
    canComment: boolean
    bookmarks: Post[]
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
    _id: new ObjectId(),
    uid: '',
    gender: null,
    avatar: null,
    blurhash: null,
    address: '',
    cnp: '',
    placeOfBirth: '',
    group: INITIAL_GROUP,
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
    _id: new ObjectId(),
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
    groups: [],
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
        _id: new ObjectId(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    }
}

export const generateChild = (): Child => {
    return {
        ...INITIAL_CHILD,
        _id: new ObjectId(),
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
                _id: new ObjectId(),
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
