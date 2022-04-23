import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingVendorListingPage } from './shopping-vendor-listing.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingVendorListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingVendorListingPageRoutingModule {}
