import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtilityDTHPage } from './utility-dth.page';

const routes: Routes = [
  {
    path: '',
    component: UtilityDTHPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilityDTHPageRoutingModule {}
