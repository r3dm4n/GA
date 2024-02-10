export interface Choice {
    id: string
    text: string
    votes: number
    votedBy: string[]
}

export interface Poll {
    choices: Choice[]
    totalVotes: number
    createdAt: string
    expiresAt: string
    isExpired: boolean
}

export const INITIAL_POLL: Poll = {
    choices: [],
    totalVotes: 0,
    createdAt: new Date().toISOString(),
    expiresAt: new Date().toISOString(),
    isExpired: false,
}