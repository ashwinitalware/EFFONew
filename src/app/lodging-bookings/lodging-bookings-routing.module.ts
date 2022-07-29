import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LodgingBookingsPage } from './lodging-bookings.page';

const routes: Routes = [
  {
    path: '',
    component: LodgingBookingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LodgingBookingsPageRoutingModule {}
