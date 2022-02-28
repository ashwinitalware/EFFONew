import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeriodicserPage } from './periodicser.page';

const routes: Routes = [
  {
    path: '',
    component: PeriodicserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeriodicserPageRoutingModule {}
