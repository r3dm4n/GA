import { Plate } from './menu'
import { Child,  User } from './user'

export interface Presence {
    id: string | undefined
    uid: string
    childId: string
    date: string
    timestamp: Date
    plates: Plate[]
    isPresent: boolean
    group: string
}

export const INITIAL_PRESENCE: Presence = {
    id: undefined,
    childId: '',
    uid: '',
    isPresent: false,
    plates: [
        { percent: 0, type: 'breakfast' },
        { percent: 0, type: 'lunch' },
        { percent: 0, type: 'snack' },
    ],
    date: new Date().toISOString().slice(0, 10),
    timestamp: new Date(),
    group: 'PUBLIC'
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
