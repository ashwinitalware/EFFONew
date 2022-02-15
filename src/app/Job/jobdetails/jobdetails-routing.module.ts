import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobdetailsPage } from './jobdetails.page';

const routes: Routes = [
  {
    path: '',
    component: JobdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobdetailsPageRoutingModule {}
