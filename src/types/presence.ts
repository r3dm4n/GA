import { Group } from './group'
import { Plate } from './menu'
import { INITIAL_METADATA, Metadata } from './metadata'
import { Tax } from './tax'
import { Child } from './user'
import { WorkingDays } from './working-days'

export interface Presence extends Metadata {
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
    childId: '',
    isPresent: false,
    sleep: 0,
    plates: [
        {
            percent: 0,
            calories: 0,
            type: 'breakfast',
            created: null,
        },
        {
            percent: 0,
            calories: 0,
            type: 'lunch',
            created: null,
        },
        {
            percent: 0,
            calories: 0,
            type: 'snack',
            created: null,
        },
    ],
    date: new Date().toISOString().slice(0, 10),
    groupId: 'PUBLIC',
    ...INITIAL_METADATA,
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
