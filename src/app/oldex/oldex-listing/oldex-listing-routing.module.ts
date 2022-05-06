import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OldexListingPage } from './oldex-listing.page';

const routes: Routes = [
  {
    path: '',
    component: OldexListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OldexListingPageRoutingModule {}
