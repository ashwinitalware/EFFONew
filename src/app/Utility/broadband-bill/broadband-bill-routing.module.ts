import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BroadbandBillPage } from './broadband-bill.page';

const routes: Routes = [
  {
    path: '',
    component: BroadbandBillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BroadbandBillPageRoutingModule {}
