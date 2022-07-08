import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackPage } from './track.page';

const routes: Routes = [
  {
    path: '',
    component: TrackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackPageRoutingModule {}
