import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabAllTransportPage } from './cab-all-transport.page';

const routes: Routes = [
  {
    path: '',
    component: CabAllTransportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabAllTransportPageRoutingModule {}
