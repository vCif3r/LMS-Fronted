import { Grade } from "./grade"

export interface Course{
    id: string
    title: string
    description: string
    grade: Grade
    is_active: Boolean
    picture: String
    created_at: Date,
    updated_at: Date
}