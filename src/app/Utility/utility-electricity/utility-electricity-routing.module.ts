import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtilityElectricityPage } from './utility-electricity.page';

const routes: Routes = [
  {
    path: '',
    component: UtilityElectricityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilityElectricityPageRoutingModule {}
