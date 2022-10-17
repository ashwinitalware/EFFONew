import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectCityPage } from './select-city.page';

const routes: Routes = [
  {
    path: '',
    component: SelectCityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectCityPageRoutingModule {}
