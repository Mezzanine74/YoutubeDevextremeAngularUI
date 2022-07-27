import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DersDatagridRoutingModule } from './ders-datagrid-routing.module';
import { DxDataGridModule } from 'devextreme-angular';
import { DatagridcrudislemleriComponent } from './_01-crud-islemleri/datagridcrudislemleri.component';

@NgModule({
  declarations: [
    DatagridcrudislemleriComponent
  ],
  imports: [
    CommonModule,
    DxDataGridModule,    
    DersDatagridRoutingModule
  ]
})
export class DersDatagridModule { }
