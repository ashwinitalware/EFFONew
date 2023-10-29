import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseOperatorRegionPage } from './choose-operator-region.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseOperatorRegionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseOperatorRegionPageRoutingModule {}
