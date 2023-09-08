import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BroadbandDashboardPage } from './broadband-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: BroadbandDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BroadbandDashboardPageRoutingModule {}
