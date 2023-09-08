import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelDashboardPage } from './hotel-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: HotelDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelDashboardPageRoutingModule {}
