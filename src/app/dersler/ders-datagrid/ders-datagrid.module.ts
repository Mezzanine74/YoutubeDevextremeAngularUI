import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Datagridders1Component } from './ders-1/datagridders1.component';
import { Datagridders2Component } from './ders-2/datagridders2.component';
import { DersDatagridRoutingModule } from './ders-datagrid-routing.module';
import { DxDataGridModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    Datagridders1Component,
    Datagridders2Component
  ],
  imports: [
    CommonModule,
    DxDataGridModule,    
    DersDatagridRoutingModule
  ]
})
export class DersDatagridModule { }
