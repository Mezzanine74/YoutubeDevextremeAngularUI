import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DersTagboxRoutingModule } from './ders-tagbox-routing.module';
import { DxTagBoxModule } from 'devextreme-angular';
import { TagboxgenelComponent } from './_01-genel/tagboxgenel.component';
import { TagboxgetsetComponent } from './_02-get-set/tagboxgetset.component';

@NgModule({
  declarations: [
    TagboxgenelComponent,
    TagboxgetsetComponent
  ],
  imports: [
    CommonModule,
    DxTagBoxModule,
    DersTagboxRoutingModule
  ]
})
export class DersTagboxModule { }
