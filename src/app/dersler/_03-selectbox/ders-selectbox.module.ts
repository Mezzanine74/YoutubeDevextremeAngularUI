import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DersSelectboxRoutingModule } from './ders-selectbox-routing.module';
import { DxSelectBoxModule } from 'devextreme-angular';
import { SelectboxgenelComponent } from './_01-genel/selectboxgenel.component';

@NgModule({
  declarations: [
    SelectboxgenelComponent
  ],
  imports: [
    CommonModule,
    DxSelectBoxModule,
    DersSelectboxRoutingModule
  ]
})
export class DersSelectboxModule { }
