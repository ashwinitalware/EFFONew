import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyListPage } from './property-list.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyListPageRoutingModule {}
