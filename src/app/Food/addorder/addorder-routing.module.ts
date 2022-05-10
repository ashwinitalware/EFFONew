import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddorderPage } from './addorder.page';

const routes: Routes = [
  {
    path: '',
    component: AddorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddorderPageRoutingModule {}
