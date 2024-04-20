import { Group } from './group'
import { Plate } from './menu'
import { Metadata } from './metadata'
import { Tax } from './tax'
import { Child } from './user'
import { WorkingDays } from './working-days'

export interface Presence extends Metadata {
    id: number
    childId: string
    child?: Child
    date: string
    isPresent: boolean
    groupId: string
    group?: Group

    sleep: number
    plates: Plate[]
}

export const INITIAL_PRESENCE: Presence = {
    id: -1,
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
    groupId: 'PUBLIC',
    createdAt: '',
    updatedAt: '',
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
