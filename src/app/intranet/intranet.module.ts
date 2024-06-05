import { NgModule } from '@angular/core';
import { SharedModule } from '../core/shared/shared-module';
import { IntranetRoutingModule } from './intranet-routing.module';
import { IntranetComponent } from './intranet.component';

@NgModule({
  declarations: [IntranetComponent],
  imports: [
    SharedModule, IntranetRoutingModule
  ],
  exports: [],
  providers: [],
})
export class IntranetModule { }
