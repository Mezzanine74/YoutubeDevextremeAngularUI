import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DersListRoutingModule } from './ders-list-routing.module';
import { DxListModule } from 'devextreme-angular';
import { ListgenelComponent } from './_01-genel/listgenel.component';

@NgModule({
  declarations: [
    ListgenelComponent
  ],
  imports: [
    CommonModule,
    DxListModule,
    DersListRoutingModule
  ]
})
export class DersListModule { }
