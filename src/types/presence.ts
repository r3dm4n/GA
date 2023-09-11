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

    displayName: string | null
    avatar: string | null
    tokens: string[]
}

export const INITIAL_PRESENCE: Presence = {
    id: null,
    uid: '',
    childId: '',
    isPresent: false,
    sleep: 0,
    plates: [
        { percent: 0, type: 'breakfast' },
        { percent: 0, type: 'lunch' },
        { percent: 0, type: 'snack' },
    ],
    date: new Date().toISOString().slice(0, 10),
    timestamp: new Date(),
    groupId: 'PUBLIC',

    displayName: null,
    avatar: null,
    tokens: [],
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
