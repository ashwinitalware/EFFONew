import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingdetailsPage } from './bookingdetails.page';

const routes: Routes = [
  {
    path: '',
    component: BookingdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingdetailsPageRoutingModule {}
