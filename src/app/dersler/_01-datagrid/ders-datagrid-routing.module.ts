import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/app/core/guard/login-guard';
import { DatagridcrudislemleriComponent } from './_01-crud-islemleri/datagridcrudislemleri.component';

const routes: Routes = [
  { path: '01-crud-islemleri', component: DatagridcrudislemleriComponent, canActivate: [LoginGuard]},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule]
})
export class DersDatagridRoutingModule { }
