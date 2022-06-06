import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabConfirmBookingPage } from './cab-confirm-booking.page';

const routes: Routes = [
  {
    path: '',
    component: CabConfirmBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabConfirmBookingPageRoutingModule {}
