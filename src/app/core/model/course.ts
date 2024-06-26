import { Grade } from "./grade"

export interface Course{
    _id: string
    title: string
    image: string
    description: string
    grade?: Grade
}