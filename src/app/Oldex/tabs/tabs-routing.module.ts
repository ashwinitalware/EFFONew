import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: "home"
      },
      {
        path: 'home',
        loadChildren: () => import('../oldexdashboard/oldexdashboard.module').then(m => m.OldexdashboardPageModule)
      },
      {
        path: 'product',
        loadChildren: () => import('../productdetails/productdetails.module').then(m => m.ProductdetailsPageModule)
      },
      {
        path: 'favorite',
        loadChildren: () => import('../addfavorite/addfavorite.module').then(m => m.AddfavoritePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../myprofile/myprofile.module').then(m => m.MyprofilePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
