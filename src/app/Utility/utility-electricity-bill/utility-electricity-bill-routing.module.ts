import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtilityElectricityBillPage } from './utility-electricity-bill.page';

const routes: Routes = [
  {
    path: '',
    component: UtilityElectricityBillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilityElectricityBillPageRoutingModule {}
