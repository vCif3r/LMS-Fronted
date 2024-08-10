import { Grade } from "./grade";
import { User } from "./user";

export interface Enrollment {
    id: any
    student: User
    grade: Grade
    is_active: boolean
    created_at: Date
    update_at: Date
}