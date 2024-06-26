import { CourseDetail } from "./courseDetail";
import { Student } from "./student";

export interface Enrollement {
    _id: string
    student: Student
    courseDetail: CourseDetail[]
    enrollmentDate: Date
    status: Boolean
}