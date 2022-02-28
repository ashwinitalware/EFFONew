import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectronicsservicesPage } from './electronicsservices.page';

const routes: Routes = [
  {
    path: '',
    component: ElectronicsservicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectronicsservicesPageRoutingModule {}
