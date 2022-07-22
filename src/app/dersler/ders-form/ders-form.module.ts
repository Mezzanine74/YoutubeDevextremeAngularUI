import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Formders1Component } from './ders-1/formders1.component';
import { Formders2Component } from './ders-2/formders2.component';
import { DersFormRoutingModule } from './ders-form-routing.module';



@NgModule({
  declarations: [
    Formders1Component,
    Formders2Component
  ],
  imports: [
    CommonModule,
    DersFormRoutingModule
  ]
})
export class DersFormModule { }
