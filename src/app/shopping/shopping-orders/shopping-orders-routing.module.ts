import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingOrdersPage } from './shopping-orders.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingOrdersPageRoutingModule {}
