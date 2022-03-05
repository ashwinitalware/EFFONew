import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppliancesrepairingPage } from './appliancesrepairing.page';

const routes: Routes = [
  {
    path: '',
    component: AppliancesrepairingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppliancesrepairingPageRoutingModule {}
