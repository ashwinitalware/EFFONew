import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LodgingdashPage } from './lodgingdash.page';

const routes: Routes = [
  {
    path: '',
    component: LodgingdashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LodgingdashPageRoutingModule {}
