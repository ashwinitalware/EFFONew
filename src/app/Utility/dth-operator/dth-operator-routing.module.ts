import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DthOperatorPage } from './dth-operator.page';

const routes: Routes = [
  {
    path: '',
    component: DthOperatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DthOperatorPageRoutingModule {}
