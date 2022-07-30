import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DersListRoutingModule } from './ders-list-routing.module';
import { DxListModule } from 'devextreme-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DxListModule,
    DersListRoutingModule
  ]
})
export class DersListModule { }