import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusBookingsPage } from './bus-bookings.page';

const routes: Routes = [
  {
    path: '',
    component: BusBookingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusBookingsPageRoutingModule {}
