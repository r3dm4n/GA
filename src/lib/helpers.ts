import { MealType } from '../types/menu'
import { Role, Schedule, UserType } from '../types/user'

export function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export const GENERIC_ERROR = 'Oops, a aparut o eroare'
export const mealTypeToRomanian = (mealType: MealType): string => {
    switch (mealType) {
        case 'breakfast':
            return 'Mic dejun'
        case 'lunch':
            return 'Pranz'
        case 'snack':
            return 'Gustare'
        default:
            return ''
    }
}

export const dateToRomanian = (date: string): string => {
    return date.replace('-', '.').split('.').reverse().join('.')
}

export const dayOfWeekToString = (index: number): string => {
    switch (index) {
        case 1:
            return 'luni'
        case 2:
            return 'marti'
        case 3:
            return 'miercuri'
        case 4:
            return 'joi'
        case 5:
            return 'vineri'
        case 6:
            return 'sambata'
        case 0:
            return 'duminica'
        default:
            return 'unknown'
    }
}

export const scheduleToRo = (schedule: Schedule): string => {
    switch (schedule) {
        case Schedule.LONG:
            return 'Lung'
        case Schedule.SHORT:
            return 'Scurt'
        case Schedule.SHORT_WITH_LUNCH:
            return 'Scurt + masa'
        default:
            throw new Error('undefined schedule')
    }
}
export const roleToRo = (role: Role): string => {
    switch (role) {
        case Role.ADMIN:
            return 'Admin'
        case Role.PARENT:
            return 'Parinte'
        case Role.TEACHER:
            return 'Educatoare'
        default:
            throw new Error('undefined role')
    }
}

export const userTypeToRo = (userType: UserType | string): string => {
    switch (userType) {
        case UserType.ACTIVE:
            return 'Activi'
        case UserType.DISABLED:
            return 'Dezactivati'
        case UserType.ALL:
            return 'Toti'
        default:
            return 'unknown user type'
    }
}

export const formatCurrency = (amount: number): string => {
    const commaFormatted = String(amount).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    return `${commaFormatted} Lei`
}

export const delay = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

interface Navigation {
    title: string
    href: string
}

export const navigation: Navigation[] = [
    { title: 'Utilizatori', href: '/users' },
    { title: 'Meniu', href: '/menu' },
    { title: 'Postari', href: '/posts' },
    { title: 'Prezenta', href: '/presence' },
    { title: 'Taxa', href: '/invoices' },
    { title: 'Camere', href: '/ipcams' },
]

const today = new Date()
export const isWeekend = today.getDay() === 0 || today.getDay() === 6

export const sleep = async (time: number) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}
export const EMPTY_AVATAR =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMApjZlivZ2eTJ91_6T3wMJbzzCN6tnWOBPg&usqp=CAU'

export const userRoleToRomanain = (role: Role): string => {
    switch (role) {
        case Role.ADMIN:
            return 'Administrator'
        case Role.TEACHER:
            return 'Educatoare'
        default:
        case Role.PARENT:
            return 'Prescolar'
    }
}

export const formatTimeAgoDisplay = (str: string): string => {
    return str
        .replace('mai puțin de un minut', 'cateva sec')
        .replace('circa', '')
        .replace('minute', 'm')
        .replace('min', 'm')
        .replace('zile', 'z')
        .replace('ore', 'o')
        .replace('saptamani', 's')
        .replace('sapt', 's')
        .replace('luni', 'l')
        .replace('luna', 'l')
        .replace('ani', 'a')
        .replace('an', 'a')
}

export const generateUUID = (digits = 12): string => {
    let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let uuid = []
    for (let i = 0; i < digits; i++) {
        uuid.push(str[Math.floor(Math.random() * str.length)])
    }
    return uuid.join('')
}

export const generateNumberID = (digits = 12): number => {
    let str = '0123456789'
    let uuid = []
    for (let i = 0; i < digits; i++) {
        uuid.push(str[Math.floor(Math.random() * str.length)])
    }
    return Number(uuid.join(''))
}

export const POST_LIMIT = 10
export const POST_HEIGHT = 420
export const POST_IMAGE_LIMIT = 12

export const isValidEmail = (email: string) => {
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
    return regex.test(email)
}
