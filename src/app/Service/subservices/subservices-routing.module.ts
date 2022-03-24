import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubservicesPage } from './subservices.page';

const routes: Routes = [
  {
    path: '',
    component: SubservicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubservicesPageRoutingModule {}
