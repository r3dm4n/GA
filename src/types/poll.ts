import { ObjectId } from 'mongodb'

export interface Choice {
    _id: ObjectId
    text: string
    votes: number
    votedBy: string[]
}

export interface Poll {
    _id: ObjectId
    choices: Choice[]
    totalVotes: number
    createdAt: string
    expiresAt: string
    isExpired: boolean
}

export const INITIAL_POLL: Poll = {
    _id: new ObjectId(),
    choices: [],
    totalVotes: 0,
    createdAt: new Date().toISOString(),
    expiresAt: new Date().toISOString(),
    isExpired: false,
}
