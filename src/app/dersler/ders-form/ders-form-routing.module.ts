import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Formders1Component } from './ders-1/formders1.component';
import { Formders2Component } from './ders-2/formders2.component';

const routes: Routes = [
  { path: 'ders-1', component: Formders1Component},
  { path: 'ders-2', component: Formders2Component},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule]
})

export class DersFormRoutingModule { }
