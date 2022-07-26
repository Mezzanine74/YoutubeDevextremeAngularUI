import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSourceders1Component } from './ders-1/data-sourceders1.component';
import { DersDataSourceRoutingModule } from './ders-data-source-routing.module';
import { DxoDataSourceModule } from 'devextreme-angular/ui/nested';



@NgModule({
  declarations: [
    DataSourceders1Component
  ],
  imports: [
    CommonModule,
    DxoDataSourceModule,    
    DersDataSourceRoutingModule
  ]
})
export class DersDataSourceModule { }
