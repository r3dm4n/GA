import { INITIAL_METADATA, Metadata } from './metadata'

export interface Recepie extends Metadata {
    name: string
    ingredients: Ingredient[]
    macros: Macros
    calories: number
}

export interface Ingredient extends Metadata {
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
    ...INITIAL_METADATA,
}

export const INITIAL_RECEIPE: Recepie = {
    name: '',
    ingredients: [],
    macros: INITIAL_MACROS,
    calories: 0,
    ...INITIAL_METADATA,
}

export const INITIAL_INGREDIENT: Ingredient = {
    name: '',
    description: '',
    quantity: 0,
    caloriesPer100: 0,
    macros: INITIAL_MACROS,
    additives: '',
    alergens: '',
    isFrozen: false,
    ...INITIAL_METADATA,
}
