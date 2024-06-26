import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CensorPhonePipe } from './censor-phone.pipe';

@NgModule({
  declarations: [
    CensorPhonePipe
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
    CensorPhonePipe
  ]
})
export class SharedModule { }
