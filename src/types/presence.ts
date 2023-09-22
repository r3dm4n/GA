import { Plate } from './menu'
import { Child, User } from './user'

export interface Presence {
    id: string | null
    uid: string
    childId: string
    date: string
    timestamp: Date
    sleep: number
    plates: Plate[]
    isPresent: boolean
    groupId: string
    displayName?: string
    avatar?: string
    tokens?: string[]
}

export const INITIAL_PRESENCE: Presence = {
    id: null,
    uid: '',
    childId: '',
    isPresent: false,
    sleep: 0,
    plates: [
        {
            percent: 0,
            type: 'breakfast',
            createdAt: null,
        },
        {
            percent: 0,
            type: 'lunch',
            createdAt: null,
        },
        {
            percent: 0,
            type: 'snack',
            createdAt: null,
        },
    ],
    date: new Date().toISOString().slice(0, 10),
    timestamp: new Date(),
    groupId: 'PUBLIC',
    displayName: undefined,
    tokens: undefined,
}

export interface PresenceState {
    users: User[]
    children: Child[]
    presences: Presence[]
    date: string
    updated: boolean
    saving: boolean
    loading: boolean
    refreshing: boolean
    error: Error | null
}
