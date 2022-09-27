import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicletypePage } from './vehicletype.page';

const routes: Routes = [
  {
    path: '',
    component: VehicletypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicletypePageRoutingModule {}
