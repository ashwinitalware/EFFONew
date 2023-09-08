import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtilitySelectplanPage } from './utility-selectplan.page';

const routes: Routes = [
  {
    path: '',
    component: UtilitySelectplanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilitySelectplanPageRoutingModule {}
