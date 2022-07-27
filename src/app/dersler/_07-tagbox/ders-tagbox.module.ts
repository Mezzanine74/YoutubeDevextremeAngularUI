import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DersTagboxRoutingModule } from './ders-tagbox-routing.module';
import { DxTagBoxModule } from 'devextreme-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DxTagBoxModule,
    DersTagboxRoutingModule
  ]
})
export class DersTagboxModule { }
