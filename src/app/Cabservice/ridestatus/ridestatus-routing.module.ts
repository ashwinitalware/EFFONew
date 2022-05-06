import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RidestatusPage } from './ridestatus.page';

const routes: Routes = [
  {
    path: '',
    component: RidestatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RidestatusPageRoutingModule {}
