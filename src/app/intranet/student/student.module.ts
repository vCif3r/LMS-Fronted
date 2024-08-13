import { NgModule } from '@angular/core';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { SharedModule } from '../../core/shared/shared-module';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';
import { CoursesStudentComponent } from './courses-student/courses-student.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CourseStudentComponent } from './course-student/course-student.component';
import { TaskDetailStudentComponent } from './task-detail-student/task-detail-student.component';
import { ModuleCourseStudentComponent } from './course-student/container/module-course-student/module-course-student.component';

@NgModule({
  declarations: [StudentComponent, DashboardStudentComponent, CoursesStudentComponent, CourseCardComponent, CourseStudentComponent, TaskDetailStudentComponent, ModuleCourseStudentComponent],
  imports: [
    StudentRoutingModule,
    SharedModule
  ]
})
export class StudentModule { }
