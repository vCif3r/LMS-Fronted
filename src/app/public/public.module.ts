import { NgModule } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { SharedModule } from '../core/shared/shared-module';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';

@NgModule({
  declarations: [PublicComponent, LoginComponent],
  imports: [SharedModule, PublicRoutingModule],
  exports: [],
  providers: [],
})
export class PublicModule {}
