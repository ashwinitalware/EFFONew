import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DthPayPage } from './dth-pay.page';

const routes: Routes = [
  {
    path: '',
    component: DthPayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DthPayPageRoutingModule {}
