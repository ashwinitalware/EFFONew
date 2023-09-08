import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtilityDashboardPage } from './utility-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: UtilityDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilityDashboardPageRoutingModule {}
