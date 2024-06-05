import { NgModule } from '@angular/core';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { SharedModule } from '../../core/shared/shared-module';
import { SidenavStudentComponent } from './components/sidenav-student/sidenav-student.component';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';
import { ProfileStudentComponent } from './profile-student/profile-student.component';

@NgModule({
  declarations: [StudentComponent, SidenavStudentComponent, DashboardStudentComponent, ProfileStudentComponent],
  imports: [
    StudentRoutingModule,
    SharedModule
  ]
})
export class StudentModule { }
