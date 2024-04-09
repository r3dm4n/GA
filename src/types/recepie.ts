export interface Recepie {
    _id: string | null
    name: string
    ingredients: Ingredient[]
    macros: Macros
    calories: number
}

export interface Ingredient {
    _id: string | null
    name: string
    description: string
    quantity: number
    caloriesPer100: number
    macros: Macros
    additives: string
    alergens: string
    frozen: boolean
}

export interface Macros {
    fats: number
    saturatedFats: number
    carbohydrates: number
    proteins: number
    sugars: number
    salt: number
}

export const INITIAL_MACROS: Macros = {
    fats: 0,
    saturatedFats: 0,
    carbohydrates: 0,
    sugars: 0,
    proteins: 0,
    salt: 0,
}

export const INITIAL_RECEIPE: Recepie = {
    _id: null,
    name: '',
    ingredients: [],
    macros: INITIAL_MACROS,
    calories: 0,
}

export const INITIAL_INGREDIENT: Ingredient = {
    _id: null,
    name: '',
    description: '',
    quantity: 0,
    caloriesPer100: 0,
    macros: INITIAL_MACROS,
    additives: '',
    alergens: '',
    frozen: false,
}