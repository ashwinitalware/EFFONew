import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LodgingeditprofilePage } from './lodgingeditprofile.page';

const routes: Routes = [
  {
    path: '',
    component: LodgingeditprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LodgingeditprofilePageRoutingModule {}
