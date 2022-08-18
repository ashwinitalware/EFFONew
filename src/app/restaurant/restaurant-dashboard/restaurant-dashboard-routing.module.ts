import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantDashboardPage } from './restaurant-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantDashboardPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../restaurant-home/restaurant-home.module').then(
            (m) => m.RestaurantHomePageModule
          ),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('../restaurant-orders/restaurant-orders.module').then(
            (m) => m.RestaurantOrdersPageModule
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
export class RestaurantDashboardPageRoutingModule {}
