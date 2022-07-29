import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LodgingBookingsDetailsPage } from './lodging-bookings-details.page';

const routes: Routes = [
  {
    path: '',
    component: LodgingBookingsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LodgingBookingsDetailsPageRoutingModule {}
