import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagboxgenelComponent } from './_01-genel/tagboxgenel.component';
import { TagboxgetsetComponent } from './_02-get-set/tagboxgetset.component';
import { TagboxlimitentryComponent } from './_03-limit-entry/tagboxlimitentry.component';

const routes: Routes = [
  { path: '01-genel', component: TagboxgenelComponent},
  { path: '02-getset', component: TagboxgetsetComponent},
  { path: '03-limit-entry', component: TagboxlimitentryComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule]
})
export class DersTagboxRoutingModule { }
