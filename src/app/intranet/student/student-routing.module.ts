import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';
import { CoursesStudentComponent } from './courses-student/courses-student.component';
import { CourseStudentComponent } from './course-student/course-student.component';
import { TaskDetailStudentComponent } from './task-detail-student/task-detail-student.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full',},
      {
        path: 'dashboard',
        component: DashboardStudentComponent,
        title: 'Tablero'
      },
      {
        path: 'courses',
        component: CoursesStudentComponent,
        title: 'Cursos'
      },
      {
        path: 'courses/:courseId',
        component: CourseStudentComponent
      },
      {
        path: 'tasks/:taskId',
        component: TaskDetailStudentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
