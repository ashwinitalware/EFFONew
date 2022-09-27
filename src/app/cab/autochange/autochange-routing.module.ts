import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutochangePage } from './autochange.page';

const routes: Routes = [
  {
    path: '',
    component: AutochangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutochangePageRoutingModule {}
