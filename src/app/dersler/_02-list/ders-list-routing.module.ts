import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListgenelComponent } from './_01-genel/listgenel.component';
import { ListgetsetComponent } from './_02-get-set/listgetset.component';
import { ListunselectitemComponent } from './_03-unselect-item/listunselectitem.component';
import { ListshowmoreComponent } from './_04-show-more/listshowmore.component';

const routes: Routes = [
  { path: '01-genel', component: ListgenelComponent},
  { path: '02-get-set', component: ListgetsetComponent},
  { path: '03-unselect-item', component: ListunselectitemComponent},
  { path: '04-show-more', component: ListshowmoreComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule]
})
export class DersListRoutingModule { }
