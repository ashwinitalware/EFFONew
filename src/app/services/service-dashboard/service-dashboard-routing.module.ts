import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceDashboardPage } from './service-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceDashboardPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../service-home/service-home.module').then(
            (m) => m.ServiceHomePageModule
          ),
      },
      {
        path: 'history',
        loadChildren: () =>
          import('../service-bookings/service-bookings.module').then(
            (m) => m.ServiceBookingsPageModule
          ),
      },
      {
        path: '',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceDashboardPageRoutingModule {}
