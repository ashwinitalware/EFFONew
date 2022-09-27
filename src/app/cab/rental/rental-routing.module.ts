import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentalPage } from './rental.page';

const routes: Routes = [
  {
    path: '',
    component: RentalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentalPageRoutingModule {}
