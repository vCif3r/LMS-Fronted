import { Course } from "./course"

export interface Task{
    title: string
    description: string
    startDate: Date
    deadline: Date
    course: Course
}