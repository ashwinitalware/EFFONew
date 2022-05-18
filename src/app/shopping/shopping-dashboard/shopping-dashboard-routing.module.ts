import { ShoppingSettingsPageModule } from './../shopping-settings/shopping-settings.module';
import { ShoppingOrdersPageModule } from './../shopping-orders/shopping-orders.module';
import { ShoppingHomePageModule } from './../shopping-home/shopping-home.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingDashboardPage } from './shopping-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingDashboardPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./../shopping-home/shopping-home.module').then(
            (m) => m.ShoppingHomePageModule
          ),
        // component: JobHomePage,
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('./../shopping-orders/shopping-orders.module').then((m) => m.ShoppingOrdersPageModule),
        // component: HistoryPage,
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./../shopping-settings/shopping-settings.module').then(
            (m) => m.ShoppingSettingsPageModule
          ),
        // component: JobProfilePage,
      },
      {
        path: '',
        redirectTo: 'home',
        // component: HistoryPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingDashboardPageRoutingModule {}
