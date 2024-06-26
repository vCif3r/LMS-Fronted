import { NgModule } from '@angular/core';
import { RoleGuard } from '../../core/guards/RoleGuard.guard';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { ListStudentAdminComponent } from './list-student-admin/list-student-admin.component';
import { ListGradesAdminComponent } from './list-grades-admin/list-grades-admin.component';
import { ListCoursesAdminComponent } from './list-courses-admin/list-courses-admin.component';
import { ListTeachersAdminComponent } from './list-teachers-admin/list-teachers-admin.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            {
                path: 'dashboard',
                component: DashboardAdminComponent,
                title: 'Dashboard'
            },
            {
                path: 'students',
                component: ListStudentAdminComponent,
                title: 'Estudiantes'
            },
            {
                path: 'teachers',
                component: ListTeachersAdminComponent,
                title: 'Profesores'
            },
            {
                path: 'grades',
                component: ListGradesAdminComponent,
                title: 'Grades'
            },
            {
                path: 'courses',
                component: ListCoursesAdminComponent,
                title: 'Courses'
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }