import { Grade } from "./grade"

export interface Student {
    _id: string,
    name: string,
    lastname: string
    email: string
    phone: string
    avatar: string
    wallpaper: string
    grade: Grade
}