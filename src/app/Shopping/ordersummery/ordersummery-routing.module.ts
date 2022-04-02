import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersummeryPage } from './ordersummery.page';

const routes: Routes = [
  {
    path: '',
    component: OrdersummeryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersummeryPageRoutingModule {}
