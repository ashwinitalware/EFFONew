import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FastagBillPage } from './fastag-bill.page';

const routes: Routes = [
  {
    path: '',
    component: FastagBillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FastagBillPageRoutingModule {}
