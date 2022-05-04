import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RidedetailsPage } from './ridedetails.page';

const routes: Routes = [
  {
    path: '',
    component: RidedetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RidedetailsPageRoutingModule {}
