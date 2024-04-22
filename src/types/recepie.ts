import { Metadata } from './metadata'

export interface Recepie {
    id: string
    name: string
    ingredients: Ingredient[]
    macros: Macros
    calories: number
}

export interface Ingredient extends Metadata {
    id: string | null
    name: string
    description: string
    quantity: number
    caloriesPer100: number
    macros: Macros
    additives: string
    alergens: string
    isFrozen: boolean
}

export interface Macros extends Metadata {
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
    createdAt: '',
    updatedAt: '',
}

export const INITIAL_RECEIPE: Recepie = {
    id: '',
    name: '',
    ingredients: [],
    macros: INITIAL_MACROS,
    calories: 0,
}

export const INITIAL_INGREDIENT: Ingredient = {
    id: null,
    name: '',
    description: '',
    quantity: 0,
    caloriesPer100: 0,
    macros: INITIAL_MACROS,
    additives: '',
    alergens: '',
    isFrozen: false,
    createdAt: '',
    updatedAt: '',
}
