import { generateNumberID } from '../lib/helpers'
import { Metadata } from './metadata'
import { User } from './user'

export interface Choice extends Metadata {
    id: number
    votedBy: User[]
    text: string
    votes: number
    pollId: number
}

export interface Poll {
    id: number | null
    choices: Choice[]
    totalVotes: number
    postId: number | null
    createdAt: string
    expiresAt: string
}

export const INITIAL_POLL: Poll = {
    id: generateNumberID(),
    postId: null,
    choices: [],
    totalVotes: 0,
    createdAt: new Date().toISOString(),
    expiresAt: new Date().toISOString(),
}
