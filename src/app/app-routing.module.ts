import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'logout', redirectTo: '/login' },
  {path: 'login', component: LoginComponent },
  {path: '01-datagrid', loadChildren: () => import('./dersler/_01-datagrid/ders-datagrid.module').then(c=>c.DersDatagridModule)},
  {path: '02-list', loadChildren: () => import('./dersler/_02-list/ders-list.module').then(c=>c.DersListModule)},
  {path: '03-selectbox', loadChildren: () => import('./dersler/_03-selectbox/ders-selectbox.module').then(c=>c.DersSelectboxModule)},
  {path: '04-treelist', loadChildren: () => import('./dersler/_04-treelist/ders-treelist.module').then(c=>c.DersTreelistModule)},
  {path: '05-form', loadChildren: () => import('./dersler/_05-form/ders-form.module').then(c=>c.DersFormModule)},
  {path: '06-popup', loadChildren: () => import('./dersler/_06-popup/ders-popup.module').then(c=>c.DersPopupModule)},
  {path: '07-tagbox', loadChildren: () => import('./dersler/_07-tagbox/ders-tagbox.module').then(c=>c.DersTagboxModule)},
  {path: '08-digerleri', loadChildren: () => import('./dersler/_08-digerleri/ders-digerleri.module').then(c=>c.DersDigerleriModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
