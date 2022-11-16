import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DersListRoutingModule } from './ders-list-routing.module';
import { DxListModule } from 'devextreme-angular';
import { ListgenelComponent } from './_01-genel/listgenel.component';
import { ListgetsetComponent } from './_02-get-set/listgetset.component';
import { ListunselectitemComponent } from './_03-unselect-item/listunselectitem.component';

@NgModule({
  declarations: [
    ListgenelComponent,
    ListgetsetComponent,
    ListunselectitemComponent
  ],
  imports: [
    CommonModule,
    DxListModule,
    DersListRoutingModule
  ]
})
export class DersListModule { }
