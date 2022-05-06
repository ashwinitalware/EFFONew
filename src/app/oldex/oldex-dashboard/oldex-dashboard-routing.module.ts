import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OldexDashboardPage } from './oldex-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: OldexDashboardPage
    ,
    children:[
      {
        path:'',
        redirectTo:'home'
      }
,
      {
        path:'home',
        loadChildren:()=>import('../oldex-home/oldex-home.module').then(m=>m.OldexHomePageModule)
      },
      {
        path:'product',
        loadChildren:()=>import('../oldex-my-products/oldex-my-products.module').then(m=>m.OldexMyProductsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OldexDashboardPageRoutingModule {}
