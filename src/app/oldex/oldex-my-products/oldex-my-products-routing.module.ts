import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OldexMyProductsPage } from './oldex-my-products.page';

const routes: Routes = [
  {
    path: '',
    component: OldexMyProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OldexMyProductsPageRoutingModule {}
