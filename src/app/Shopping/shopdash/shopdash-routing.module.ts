import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopdashPage } from './shopdash.page';

const routes: Routes = [
  {
    path: '',
    component: ShopdashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopdashPageRoutingModule {}
