import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtilityPayPage } from './utility-pay.page';

const routes: Routes = [
  {
    path: '',
    component: UtilityPayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilityPayPageRoutingModule {}
