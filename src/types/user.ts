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
    canComment: false,
    createdAt: '',
    updatedAt: '',
}

export const INITIAL_USER_BASIC_INFO: User = {
    parents: [],
    children: [],
    emergencyContacts: [],
    uid: '',
    displayName: '',
    avatar: null,
    customerId: null,
    email: '',
    password: '',
    role: Role.PARENT,
    groups: [Group.BEBE],
    tokens: [],
    ipcams: [IpcamId.BEBE, IpcamId.MICA],
    disabled: false,
    canComment: false,
    createdAt: '',
    updatedAt: '',
}

// export const createUser = (oldUser: OldUser): User => {
//     const lastName = oldUser.displayName.split(' ')?.[0] ?? 'lastName'
//     const firstName = oldUser.displayName.split(' ')?.[1] ?? 'firstName'

//     const newUser: User = {
//         parents: [
//             {
//                 id: '0',
//                 phoneNumber: oldUser.phone,
//                 createdAt: oldUser.created,
//                 firstName: '',
//                 lastName: lastName,
//                 address: '',
//                 updatedAt: new Date().toISOString(),
//             },
//         ],
//         children: [
//             {
//                 uid: oldUser.uid,
//                 id: uuid(),
//                 cnp: '',
//                 placeOfBirth: '',
//                 group:
//                     oldUser.groups.length > 0
//                         ? (oldUser.groups[0].toUpperCase() as Group)
//                         : Group.BEBE,
//                 birthday: oldUser.birthday,
//                 createdAt: oldUser.created,
//                 updatedAt: new Date().toISOString(),
//                 firstName,
//                 lastName,
//                 schedule: oldUser.schedule
//                     ? (oldUser.schedule
//                           .replace('scurt', Schedule.SHORT_WITH_LUNCH)
//                           .replace('prelungit', Schedule.LONG) as Schedule)
//                     : Schedule.LONG,
//             },
//         ],
//         emergencyContacts: [],
//         uid: oldUser.uid ?? '',
//         displayName: oldUser.displayName,
//         avatar: null,
//         email: oldUser.email,
//         password: oldUser.password,
//         role: Role.PARENT,
//         groups: oldUser.groups.map((g) => g.toUpperCase() as Group),
//         ipcams: [],
//         tokens: oldUser.tokens,
//         disabled: oldUser.disabled,
//         canComment: true,
//         createdAt: oldUser.created,
//         updatedAt: new Date().toISOString(),
//     }
//     return newUser
// }
