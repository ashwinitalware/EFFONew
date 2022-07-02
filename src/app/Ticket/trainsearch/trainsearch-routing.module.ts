import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainsearchPage } from './trainsearch.page';

const routes: Routes = [
  {
    path: '',
    component: TrainsearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainsearchPageRoutingModule {}
