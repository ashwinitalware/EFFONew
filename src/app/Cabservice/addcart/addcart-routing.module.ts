import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcartPage } from './addcart.page';

const routes: Routes = [
  {
    path: '',
    component: AddcartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcartPageRoutingModule {}
