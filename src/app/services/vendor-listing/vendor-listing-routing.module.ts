import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorListingPage } from './vendor-listing.page';

const routes: Routes = [
  {
    path: '',
    component: VendorListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorListingPageRoutingModule {}
