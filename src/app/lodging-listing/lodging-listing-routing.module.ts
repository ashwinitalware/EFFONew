import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LodgingListingPage } from './lodging-listing.page';

const routes: Routes = [
  {
    path: '',
    component: LodgingListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LodgingListingPageRoutingModule {}
