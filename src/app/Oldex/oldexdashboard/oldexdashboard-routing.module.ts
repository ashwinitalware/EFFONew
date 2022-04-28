import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OldexdashboardPage } from './oldexdashboard.page';

const routes: Routes = [
  {
    path: '',
    component: OldexdashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OldexdashboardPageRoutingModule {}
