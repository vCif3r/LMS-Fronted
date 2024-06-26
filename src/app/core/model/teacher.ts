import { Grade } from "./grade"

export interface Teacher {
    _id: string,
    name: string,
    lastname: string
    email: string
    phone: string
    avatar: string
    wallpaper: string
    grade: Grade
    createdAt: Date
    dni: string
}