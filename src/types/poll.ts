export interface Choice {
    id: string
    text: string
    votes: number
    votedBy: string[]
}

export interface Poll {
    id?: string
    postId: string
    createdBy: string
    title: string
    choices: Choice[]
    totalVotes: number
    createdAt: string
    expiresAt: string
    isExpired: boolean
}

export const INITIAL_POLL: Poll = {
    id: '',
    postId: '',
    createdBy: '',
    title: '',
    choices: [],
    totalVotes: 0,
    createdAt: new Date().toISOString(),
    expiresAt: new Date().toISOString(),
    isExpired: false,
}