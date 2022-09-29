import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutBookingDetailsPage } from './out-booking-details.page';

const routes: Routes = [
  {
    path: '',
    component: OutBookingDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutBookingDetailsPageRoutingModule {}
