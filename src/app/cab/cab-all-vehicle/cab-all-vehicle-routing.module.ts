import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabAllVehiclePage } from './cab-all-vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: CabAllVehiclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabAllVehiclePageRoutingModule {}
