import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DersFormRoutingModule } from './ders-form-routing.module';
import { DxFormModule } from 'devextreme-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DxFormModule,
    DersFormRoutingModule
  ]
})
export class DersFormModule { }
