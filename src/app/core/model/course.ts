import { Grade } from "./grade"
import { User } from "./user"

export interface Course{
    id: string
    title: string
    description: string
    grade: Grade
    is_active: Boolean
    picture: String
    created_at: Date
    updated_at: Date
    teacher: User
    start_date: Date
    end_date: Date
}