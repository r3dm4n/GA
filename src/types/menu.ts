import { Recepie } from './recepie'

export type MealType = 'breakfast' | 'lunch' | 'snack'

export interface Menu {
    id: string
    day: number
    dayOfWeek: string
    meals: Meal[]
}

export interface Meal {
    type: MealType
    calories: number
    recepies: Recepie[]
}

export interface Plate {
    type: MealType
    percent: number
    calories: number
    created: string | null
}

export interface Eat {
    uid: string
    childId: string
    date: string
    plates: Plate[]
}
