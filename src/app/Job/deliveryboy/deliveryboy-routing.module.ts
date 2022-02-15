import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryboyPage } from './deliveryboy.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryboyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryboyPageRoutingModule {}
