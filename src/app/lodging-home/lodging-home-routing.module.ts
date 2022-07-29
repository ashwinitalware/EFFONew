import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LodgingHomePage } from './lodging-home.page';

const routes: Routes = [
  {
    path: '',
    component: LodgingHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LodgingHomePageRoutingModule {}
