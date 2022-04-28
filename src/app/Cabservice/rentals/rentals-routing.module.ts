import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentalsPage } from './rentals.page';

const routes: Routes = [
  {
    path: '',
    component: RentalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentalsPageRoutingModule {}
