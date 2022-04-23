import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingVendorMenuPage } from './shopping-vendor-menu.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingVendorMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingVendorMenuPageRoutingModule {}
