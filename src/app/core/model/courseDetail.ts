import { Course } from "./course"
import { Teacher } from "./teacher";

export interface CourseDetail {
    _id: string
    teacher: Teacher
    course: Course
    startDate: Date
    endDate: Date
}