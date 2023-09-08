import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtilityMobilePage } from './utility-mobile.page';

const routes: Routes = [
  {
    path: '',
    component: UtilityMobilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilityMobilePageRoutingModule {}
