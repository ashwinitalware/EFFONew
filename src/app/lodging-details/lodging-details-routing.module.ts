import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LodgingDetailsPage } from './lodging-details.page';

const routes: Routes = [
  {
    path: '',
    component: LodgingDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LodgingDetailsPageRoutingModule {}
