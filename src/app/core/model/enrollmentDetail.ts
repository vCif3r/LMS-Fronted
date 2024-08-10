import { CourseDetail } from "./courseDetail";
import { Enrollment } from "./enrollment";

export interface EnrollmentDetail {
    course_detail: CourseDetail;
    enrollment: Enrollment;
}