import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickupPage } from './pickup.page';

const routes: Routes = [
  {
    path: '',
    component: PickupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickupPageRoutingModule {}
