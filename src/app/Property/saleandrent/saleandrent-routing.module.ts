import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleandrentPage } from './saleandrent.page';

const routes: Routes = [
  {
    path: '',
    component: SaleandrentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleandrentPageRoutingModule {}
