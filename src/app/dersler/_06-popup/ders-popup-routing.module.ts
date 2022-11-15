import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopupgenelComponent } from './_01-genel/popupgenel.component';

const routes: Routes = [
  { path: '01-genel', component: PopupgenelComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule]
})
export class DersPopupRoutingModule { }
