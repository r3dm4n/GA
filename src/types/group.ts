export interface Group {
    id: string
    sortId: number
    name: string
    profileUrl: string
    backgroundUrl: string
    teacherId: string
}
export const INITIAL_GROUP: Group = {
    id: '',
    sortId: 0,
    name: '',
    profileUrl: '',
    backgroundUrl: '',
    teacherId: '',
}
