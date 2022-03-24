import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcservicesdestailsPage } from './acservicesdestails.page';

const routes: Routes = [
  {
    path: '',
    component: AcservicesdestailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcservicesdestailsPageRoutingModule {}
