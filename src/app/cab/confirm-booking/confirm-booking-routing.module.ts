import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmBookingPage } from './confirm-booking.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmBookingPageRoutingModule {}
