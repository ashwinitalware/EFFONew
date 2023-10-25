import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabTransportPage } from './cab-transport.page';

const routes: Routes = [
  {
    path: '',
    component: CabTransportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabTransportPageRoutingModule {}
