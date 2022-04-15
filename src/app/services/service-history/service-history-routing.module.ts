import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceHistoryPage } from './service-history.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceHistoryPageRoutingModule {}
