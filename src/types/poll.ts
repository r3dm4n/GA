import { generateUUID } from '../lib/helpers'

export interface Choice {
    id: string
    text: string
    votes: number
    votedBy: string[]
}

export interface Poll {
    id: string
    choices: Choice[]
    totalVotes: number
    createdAt: string
    expiresAt: string
    isExpired: boolean
}

export const INITIAL_POLL: Poll = {
    id: generateUUID(),
    choices: [],
    totalVotes: 0,
    createdAt: new Date().toISOString(),
    expiresAt: new Date().toISOString(),
    isExpired: false,
}
