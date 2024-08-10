import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../core/guards/RoleGuard.guard';
import { IntranetComponent } from './intranet.component';

const routes: Routes = [
  {
    path: '',
    component: IntranetComponent,
    children: [
      {
        path: 'student',
        loadChildren: () => import('./student/student.module').then((m) => m.StudentModule),
        canActivate: [RoleGuard],
        data: { expectedRole: 'student' }
      },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
        canActivate: [RoleGuard],
        data: { expectedRole: 'admin' }
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntranetRoutingModule {}
