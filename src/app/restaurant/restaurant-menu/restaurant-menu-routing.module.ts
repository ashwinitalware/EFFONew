import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantMenuPage } from './restaurant-menu.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantMenuPageRoutingModule {}
