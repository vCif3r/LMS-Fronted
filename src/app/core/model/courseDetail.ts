import { Course } from "./course"
import { User } from "./user"

export interface CourseDetail {
    id: string
    teacher: User
    course: Course
    start_date: Date
    end_date: Date
}