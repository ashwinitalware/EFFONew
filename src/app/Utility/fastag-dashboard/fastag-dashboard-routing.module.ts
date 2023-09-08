import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FastagDashboardPage } from './fastag-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: FastagDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FastagDashboardPageRoutingModule {}
