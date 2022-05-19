import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoteldetailsPage } from './hoteldetails.page';

const routes: Routes = [
  {
    path: '',
    component: HoteldetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoteldetailsPageRoutingModule {}
