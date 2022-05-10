import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodDashboardPage } from './food-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: FoodDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodDashboardPageRoutingModule {}
