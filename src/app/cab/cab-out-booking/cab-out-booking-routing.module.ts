import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabOutBookingPage } from './cab-out-booking.page';

const routes: Routes = [
  {
    path: '',
    component: CabOutBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabOutBookingPageRoutingModule {}
