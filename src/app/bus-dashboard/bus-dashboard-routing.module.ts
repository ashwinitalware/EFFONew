import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusDashboardPage } from './bus-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: BusDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusDashboardPageRoutingModule {}
