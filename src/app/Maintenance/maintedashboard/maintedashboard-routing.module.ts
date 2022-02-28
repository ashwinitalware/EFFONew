import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintedashboardPage } from './maintedashboard.page';

const routes: Routes = [
  {
    path: '',
    component: MaintedashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintedashboardPageRoutingModule {}
