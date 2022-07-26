import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DataSourceders1Component } from './ders-1/data-sourceders1.component';

const routes: Routes = [
  { path: 'ders-1', component: DataSourceders1Component},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule]
})
export class DersDataSourceRoutingModule { }
