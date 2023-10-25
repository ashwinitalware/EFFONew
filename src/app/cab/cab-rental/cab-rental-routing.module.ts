import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabRentalPage } from './cab-rental.page';

const routes: Routes = [
  {
    path: '',
    component: CabRentalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabRentalPageRoutingModule {}
