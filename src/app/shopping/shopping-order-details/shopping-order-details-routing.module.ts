import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingOrderDetailsPage } from './shopping-order-details.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingOrderDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingOrderDetailsPageRoutingModule {}
