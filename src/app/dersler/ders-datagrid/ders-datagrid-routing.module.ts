import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Datagridders1Component } from './ders-1/datagridders1.component';
import { Datagridders2Component } from './ders-2/datagridders2.component';

const routes: Routes = [
  { path: 'ders-1', component: Datagridders1Component},
  { path: 'ders-2', component: Datagridders2Component},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule]
})
export class DersDatagridRoutingModule { }
