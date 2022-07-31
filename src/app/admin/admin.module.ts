import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminmainComponent } from './panels/main/adminmain.component';
import { AdmincustomerComponent } from './panels/customer/admincustomer.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminService } from './service/admin.service';
import { DxDataGridModule, DxTabsModule } from 'devextreme-angular';
import { AdminorderComponent } from './panels/order/adminorder.component';



@NgModule({
  declarations: [
    AdminmainComponent,
    AdmincustomerComponent,
    AdminorderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DxTabsModule,
    DxDataGridModule,
    AdminRoutingModule
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
