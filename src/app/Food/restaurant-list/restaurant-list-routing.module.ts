import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantListPage } from './restaurant-list.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantListPageRoutingModule {}
