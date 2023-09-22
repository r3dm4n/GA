export type MealType = 'breakfast' | 'lunch' | 'snack'

export interface Meal {
    type: MealType
    content: string
}

export interface Menu {
    id: number
    dayOfWeek: string
    meals: Meal[]
}

export interface Plate {
    type: MealType
    percent: number
    createdAt: string | null
}

export interface Eat {
    uid: string
    childId: string
    date: string
    plates: Plate[]
}
