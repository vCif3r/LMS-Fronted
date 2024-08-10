import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CensorPhonePipe } from './censor-phone.pipe';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    CensorPhonePipe,
    SidenavComponent,
    ToolbarComponent
    // Declaraciones de componentes, directivas y pipes compartidos
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    CensorPhonePipe,
    SidenavComponent,
    ToolbarComponent
  ]
})
export class SharedModule { }
