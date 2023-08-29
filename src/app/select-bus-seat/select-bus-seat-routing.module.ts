import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectBusSeatPage } from './select-bus-seat.page';

const routes: Routes = [
  {
    path: '',
    component: SelectBusSeatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectBusSeatPageRoutingModule {}
