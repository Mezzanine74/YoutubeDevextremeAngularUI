import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DersSelectboxRoutingModule } from './ders-selectbox-routing.module';
import { DxSelectBoxModule } from 'devextreme-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DxSelectBoxModule,
    DersSelectboxRoutingModule
  ]
})
export class DersSelectboxModule { }
