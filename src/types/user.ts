import { IpcamId } from './ipcam'
import { Metadata } from './metadata'
interface Human {
    firstName: string
    lastName: string
}

export interface Adult extends Human, Metadata {
    id: string
    phoneNumber: string
    address: string
    nationality?: string
    citizenship?: string
}

export interface Child extends Human, Metadata {
    uid: string
    id: string
    cnp: string
    placeOfBirth: string
    group: Group
    birthday: string
    schedule: Schedule
}

export interface User extends Metadata {
    uid: string
    customerId: string | null
    email: string
    displayName: string
    avatar: string | null
    password: string
    role: Role
    parents: Adult[]
    emergencyContacts: Adult[]
    children: Child[]
    groups: Group[]
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

export enum Group {
    BEBE = 'BEBE',
    MICA = 'MICA',
    MIJLOCIE = 'MIJLOCIE',
    MARE = 'MARE',
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
    groups: Group[]
}

export interface UserAvatar {
    uid: string
    url: string
}

export const INITIAL_CHILD: Child = {
    uid: '',
    id: '',
    cnp: '',
    placeOfBirth: '',
    group: Group.BEBE,
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
}

export const INITIAL_USER: User = {
    parents: [],
    children: [],
    emergencyContacts: [],
    customerId: null,
    uid: '',
    displayName: '',
    avatar: null,
    email: '',
    password: '',
    role: Role.PARENT,
    groups: [Group.BEBE],
    tokens: [],
    ipcams: [],
    disabled: false,
    canComment: true,
    createdAt: '',
    updatedAt: '',
    bookmarks: []
}
