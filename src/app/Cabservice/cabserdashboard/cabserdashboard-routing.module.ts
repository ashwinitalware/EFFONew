import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabserdashboardPage } from './cabserdashboard.page';

const routes: Routes = [
  {
    path: '',
    component: CabserdashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabserdashboardPageRoutingModule {}
