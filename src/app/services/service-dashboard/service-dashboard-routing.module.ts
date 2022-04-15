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
          import('../service-history/service-history.module').then(
            (m) => m.ServiceHistoryPageModule
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
