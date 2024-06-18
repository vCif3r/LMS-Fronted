import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {   
        path: '',
        component: PublicComponent,
        children: [
            {path: '', component: HomeComponent, title: 'Inicio'},
            { path: 'login', component: LoginComponent, title: 'Login' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule {}