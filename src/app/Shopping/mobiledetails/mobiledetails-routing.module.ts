import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobiledetailsPage } from './mobiledetails.page';

const routes: Routes = [
  {
    path: '',
    component: MobiledetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobiledetailsPageRoutingModule {}
