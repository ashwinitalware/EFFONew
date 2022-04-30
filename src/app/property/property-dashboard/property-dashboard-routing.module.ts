import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyDashboardPage } from './property-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyDashboardPage,
    children: [
      {
        path: '',
        redirectTo: "home"
      },
      {
        path: 'home',
        loadChildren: () => import('../property-home/property-home.module').then(m=>m.PropertyHomePageModule)
      },
      {
        path: 'shortlist',
        loadChildren: () => import('../property-home/property-home.module').then(m=>m.PropertyHomePageModule)
      },
      {
        path: 'own',
        loadChildren: () => import('../property-own-list/property-own-list.module').then(m=>m.PropertyOwnListPageModule)
      },
    
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyDashboardPageRoutingModule {}
