import { Course } from "./course";
import { User } from "./user";

export interface Enrollment {
    id: any
    student: User
    course: Course
    is_active: boolean
    created_at: Date
    update_at: Date
}