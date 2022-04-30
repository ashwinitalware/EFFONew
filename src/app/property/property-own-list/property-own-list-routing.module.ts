import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyOwnListPage } from './property-own-list.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyOwnListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyOwnListPageRoutingModule {}
