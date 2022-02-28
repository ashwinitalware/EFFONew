import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicedashboardPage } from './servicedashboard.page';

const routes: Routes = [
  {
    path: '',
    component: ServicedashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicedashboardPageRoutingModule {}
