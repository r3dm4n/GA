import { Metadata } from './metadata'
import { User } from './user'



export interface Poll {
    id: string | null
    choices: Choice[]
    totalVotes: number
    postId: string
    createdAt: string
    expiresAt: string
}

export interface Choice extends Metadata {
    id: string
    votedBy: User[]
    text: string
    votes: number
    pollId: string
}

export const INITIAL_POLL: Poll = {
    id: '',
    postId: '',
    choices: [],
    totalVotes: 0,
    createdAt: new Date().toISOString(),
    expiresAt: new Date().toISOString(),
}
