import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagboxgenelComponent } from './_01-genel/tagboxgenel.component';

const routes: Routes = [
  { path: '01-genel', component: TagboxgenelComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule]
})
export class DersTagboxRoutingModule { }
