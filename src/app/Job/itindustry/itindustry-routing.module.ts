import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItindustryPage } from './itindustry.page';

const routes: Routes = [
  {
    path: '',
    component: ItindustryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItindustryPageRoutingModule {}
