import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingDashboardPage } from './shopping-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingDashboardPageRoutingModule {}
