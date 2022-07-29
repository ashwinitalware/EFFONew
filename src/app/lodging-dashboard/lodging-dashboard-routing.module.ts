import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LodgingDashboardPage } from './lodging-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: LodgingDashboardPage,
    children: [
      {
        path: '',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../lodging-home/lodging-home.module').then(
            (m) => m.LodgingHomePageModule
          ),
      },
      {
        path: 'bookings',
        loadChildren: () =>
          import('../lodging-bookings/lodging-bookings.module').then(
            (m) => m.LodgingBookingsPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LodgingDashboardPageRoutingModule {}
