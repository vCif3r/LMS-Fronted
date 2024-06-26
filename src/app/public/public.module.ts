import { NgModule } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { SharedModule } from '../core/shared/shared-module';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [PublicComponent, LoginComponent, HomeComponent, NavbarComponent, FooterComponent],
  imports: [SharedModule, PublicRoutingModule, ReactiveFormsModule],
  exports: [],
  providers: [],
})
export class PublicModule {}
