import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListgenelComponent } from './_01-genel/listgenel.component';

const routes: Routes = [
  { path: '01-genel', component: ListgenelComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule]
})
export class DersListRoutingModule { }
