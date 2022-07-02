import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtilitiesdashPage } from './utilitiesdash.page';

const routes: Routes = [
  {
    path: '',
    component: UtilitiesdashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilitiesdashPageRoutingModule {}
