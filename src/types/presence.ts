import { Plate } from './menu'
import { Tax, WorkingDays } from './tax'

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
            calories: 0,
            type: 'breakfast',
            createdAt: null,
        },
        {
            percent: 0,
            calories: 0,
            type: 'lunch',
            createdAt: null,
        },
        {
            percent: 0,
            calories: 0,
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

export interface ChildPresenceReport {
    uid: string
    childId: string
    displayName: string
    presenceCount: number
    absenceCount: number
}

export interface PresenceReport extends ChildPresenceReport {
    date: string
    tax: Tax
    workingDaysCount: number
    presences: Partial<Presence>[]
}

export interface PresenceConfig {
    tax: Tax
    workingDays: WorkingDays[]
}
