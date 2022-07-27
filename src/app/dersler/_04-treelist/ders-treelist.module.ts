import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DersTreelistRoutingModule } from './ders-treelist-routing.module';
import { DxTreeListModule } from 'devextreme-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DxTreeListModule,
    DersTreelistRoutingModule
  ]
})
export class DersTreelistModule { }
