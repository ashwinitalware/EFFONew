import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusBookingReviewPage } from './bus-booking-review.page';

const routes: Routes = [
  {
    path: '',
    component: BusBookingReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusBookingReviewPageRoutingModule {}
