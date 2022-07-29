import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantOrderDetailsPage } from './restaurant-order-details.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantOrderDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantOrderDetailsPageRoutingModule {}
