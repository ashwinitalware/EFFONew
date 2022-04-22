import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertydashPage } from './propertydash.page';

const routes: Routes = [
  {
    path: '',
    component: PropertydashPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../propertyhome/propertyhome.module').then(m => m.PropertyhomePageModule)
      },
      {
        path: 'shortlist',
        loadChildren: () => import('../shortlisted/shortlisted.module').then(m => m.ShortlistedPageModule)
      },
      {
        path: 'business',
        loadChildren: () => import('../details/details.module').then(m => m.DetailsPageModule)
      },
      {
        path: 'person',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertydashPageRoutingModule { }
