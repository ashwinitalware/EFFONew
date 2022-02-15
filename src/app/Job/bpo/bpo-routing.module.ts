import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BpoPage } from './bpo.page';

const routes: Routes = [
  {
    path: '',
    component: BpoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BpoPageRoutingModule {}
