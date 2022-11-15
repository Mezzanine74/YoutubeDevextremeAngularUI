import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DersPopupRoutingModule } from './ders-popup-routing.module';
import { DxPopupModule, DxFormModule } from 'devextreme-angular';
import { PopupgenelComponent } from './_01-genel/popupgenel.component';



@NgModule({
  declarations: [
    PopupgenelComponent
  ],
  imports: [
    CommonModule,
    DxPopupModule,
    DxFormModule,
    DersPopupRoutingModule
  ]
})
export class DersPopupModule { }
