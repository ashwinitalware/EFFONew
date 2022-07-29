import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantHomePage } from './restaurant-home.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantHomePageRoutingModule {}
