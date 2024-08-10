import { NgModule } from '@angular/core';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { SharedModule } from '../../core/shared/shared-module';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ListStudentAdminComponent } from './list-student-admin/list-student-admin.component';
import { ListGradesAdminComponent } from './list-grades-admin/list-grades-admin.component';
import { DialogCreateGradeComponent } from './list-grades-admin/modal/dialog-create-grade/dialog-create-grade.component';
import { DialogCreateStudentComponent } from './list-student-admin/modal/dialog-create-student/dialog-create-student.component';
import { ListCoursesAdminComponent } from './list-courses-admin/list-courses-admin.component';
import { DialogCreateCourseComponent } from './list-courses-admin/modal/dialog-create-course/dialog-create-course.component';
import { ListTeachersAdminComponent } from './list-teachers-admin/list-teachers-admin.component';
import { DialogCreateTeacherComponent } from './list-teachers-admin/modal/dialog-create-teacher/dialog-create-teacher.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardAdminComponent,
    ListStudentAdminComponent,
    ListGradesAdminComponent,
    DialogCreateGradeComponent,
    DialogCreateStudentComponent,
    ListCoursesAdminComponent,
    DialogCreateCourseComponent,
    ListTeachersAdminComponent,
    DialogCreateTeacherComponent,
  ],
  imports: [
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
