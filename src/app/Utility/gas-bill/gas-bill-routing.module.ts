import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GasBillPage } from './gas-bill.page';

const routes: Routes = [
  {
    path: '',
    component: GasBillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GasBillPageRoutingModule {}
