import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingpipedgasPage } from './bookingpipedgas.page';

const routes: Routes = [
  {
    path: '',
    component: BookingpipedgasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingpipedgasPageRoutingModule {}
