import { NgModule } from '@angular/core';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { SharedModule } from '../../core/shared/shared-module';
import { SidenavStudentComponent } from './components/sidenav-student/sidenav-student.component';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';
import { ProfileStudentComponent } from './profile-student/profile-student.component';
import { CoursesStudentComponent } from './courses-student/courses-student.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { ToolbarStudentComponent } from './components/toolbar-student/toolbar-student.component';
import { CourseStudentComponent } from './course-student/course-student.component';

@NgModule({
  declarations: [StudentComponent, SidenavStudentComponent, DashboardStudentComponent, ProfileStudentComponent, CoursesStudentComponent, CourseCardComponent, ToolbarStudentComponent, CourseStudentComponent],
  imports: [
    StudentRoutingModule,
    SharedModule
  ]
})
export class StudentModule { }
