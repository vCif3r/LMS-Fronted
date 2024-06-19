import { Teacher } from "./teacher"

export interface Course{
    _id: string
    title: string
    image: string
    description: string
    instructor: Teacher
}