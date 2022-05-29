import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorByCategoryPage } from './vendor-by-category.page';

const routes: Routes = [
  {
    path: '',
    component: VendorByCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorByCategoryPageRoutingModule {}
