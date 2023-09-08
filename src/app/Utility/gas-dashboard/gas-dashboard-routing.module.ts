import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GasDashboardPage } from './gas-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: GasDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GasDashboardPageRoutingModule {}
