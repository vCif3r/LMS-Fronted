import { NgModule } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { SharedModule } from '../core/shared/shared-module';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [PublicComponent, LoginComponent, HomeComponent, NavbarComponent],
  imports: [SharedModule, PublicRoutingModule],
  exports: [],
  providers: [],
})
export class PublicModule {}
