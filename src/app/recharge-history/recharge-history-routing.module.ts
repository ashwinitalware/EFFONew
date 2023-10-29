import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechargeHistoryPage } from './recharge-history.page';

const routes: Routes = [
  {
    path: '',
    component: RechargeHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechargeHistoryPageRoutingModule {}
