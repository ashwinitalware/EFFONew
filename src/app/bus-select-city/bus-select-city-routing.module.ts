import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusSelectCityPage } from './bus-select-city.page';

const routes: Routes = [
  {
    path: '',
    component: BusSelectCityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusSelectCityPageRoutingModule {}
