import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusCheckoutPage } from './bus-checkout.page';

const routes: Routes = [
  {
    path: '',
    component: BusCheckoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusCheckoutPageRoutingModule {}
