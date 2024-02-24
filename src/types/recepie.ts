export interface Recepie {
    id: string | null
    name: string
    calories: number
    ingredients: Ingredient[]
}

export interface NutritionalValues {
    fats: number
    saturatedFats: number
    carbohydrates: number
    proteins: number
    sugars: number
    salt: number
}

export interface Ingredient {
    id: string | null
    name: string
    description: string
    quantity: number
    nutritionalValues: NutritionalValues
    additives: string
    alergens: string
    frozen: boolean
}

export const INITIAL_INGREDIENT: Ingredient = {
    id: null,
    name: '',
    description: '',
    quantity: 0,
    nutritionalValues: {
        fats: 0,
        saturatedFats: 0,
        carbohydrates: 0,
        sugars: 0,
        proteins: 0,
        salt: 0,
    },
    additives: '',
    alergens: '',
    frozen: false,
}

export const INITIAL_RECEIPE: Recepie = {
    id: null,
    name: '',
    calories: 0,
    ingredients: [],
}
