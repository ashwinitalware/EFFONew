import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransporthistoryPage } from './transporthistory.page';

const routes: Routes = [
  {
    path: '',
    component: TransporthistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransporthistoryPageRoutingModule {}
