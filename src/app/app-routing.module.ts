import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'ders-datagrid', loadChildren: () => import('./dersler/ders-datagrid/ders-datagrid.module').then(c=>c.DersDatagridModule)},
  {path: 'ders-form', loadChildren: () => import('./dersler/ders-form/ders-form.module').then(c=>c.DersFormModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
