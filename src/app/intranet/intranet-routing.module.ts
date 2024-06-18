import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../core/guards/RoleGuard.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'student',
  //   pathMatch: 'full'
  // },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then((m) => m.StudentModule),
    canActivate: [RoleGuard],
    data: { expectedRole: 'student' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntranetRoutingModule {}
