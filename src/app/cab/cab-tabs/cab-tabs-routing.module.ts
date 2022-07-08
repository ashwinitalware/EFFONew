import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CabHomePage } from 'src/app/cab-home/cab-home.page';
import { CabHistoryPage } from '../cab-history/cab-history.page';

import { CabTabsPage } from './cab-tabs.page';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'home',
    component: CabTabsPage,
    children: [
      {
        path: '',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../../cab-home/cab-home-routing.module').then(
            (m) => m.CabHomePageRoutingModule
          ),
        // component: CabHomePage,
      },
      {
        path: 'history',
        loadChildren: () =>
          import('../cab-history/cab-history-routing.module').then(
            (m) => m.CabHistoryPageRoutingModule
          ),

        // component: CabHistoryPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabTabsPageRoutingModule {}
