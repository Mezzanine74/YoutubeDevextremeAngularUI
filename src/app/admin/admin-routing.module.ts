import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../core/guard/login-guard';
import { AdmincustomerComponent } from './panels/customer/admincustomer.component';
import { AdminmainComponent } from './panels/main/adminmain.component';
import { AdminorderComponent } from './panels/order/adminorder.component';

const routes: Routes = [
  { path: 'panel', 
    component: AdminmainComponent,
    children: [
      {path: 'customer', component: AdmincustomerComponent, canActivate: [LoginGuard]},
      {path: 'order', component: AdminorderComponent, canActivate: [LoginGuard]}
    ]
  },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule]
})
export class AdminRoutingModule { }
