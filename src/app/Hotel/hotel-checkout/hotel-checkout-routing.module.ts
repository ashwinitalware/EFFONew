import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelCheckoutPage } from './hotel-checkout.page';

const routes: Routes = [
  {
    path: '',
    component: HotelCheckoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelCheckoutPageRoutingModule {}
