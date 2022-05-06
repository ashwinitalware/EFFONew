import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OldexDetailsPage } from './oldex-details.page';

const routes: Routes = [
  {
    path: '',
    component: OldexDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OldexDetailsPageRoutingModule {}
