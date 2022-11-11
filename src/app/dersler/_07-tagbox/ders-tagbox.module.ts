import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DersTagboxRoutingModule } from './ders-tagbox-routing.module';
import { DxTagBoxModule } from 'devextreme-angular';
import { TagboxgenelComponent } from './_01-genel/tagboxgenel.component';

@NgModule({
  declarations: [
    TagboxgenelComponent
  ],
  imports: [
    CommonModule,
    DxTagBoxModule,
    DersTagboxRoutingModule
  ]
})
export class DersTagboxModule { }
