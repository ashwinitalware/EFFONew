import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductinfoPage } from './productinfo.page';

const routes: Routes = [
  {
    path: '',
    component: ProductinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductinfoPageRoutingModule {}
