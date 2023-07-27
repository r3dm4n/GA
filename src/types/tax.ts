import { Schedule } from './user'

export interface Tier {
    groupId: string
    schedule: Schedule
    meal: number
    tuition: number
}

export interface Tax {
    days: number
    description: string
    tiers: Tier[]
}
