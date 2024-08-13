import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared/shared-module';
import { IntranetRoutingModule } from './intranet-routing.module';
import { IntranetComponent } from './intranet.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [IntranetComponent, ProfileComponent],
  imports: [
    SharedModule, IntranetRoutingModule
  ],
  exports: [],
  providers: [],
})
export class IntranetModule { }
