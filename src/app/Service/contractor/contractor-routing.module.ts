import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractorPage } from './contractor.page';

const routes: Routes = [
  {
    path: '',
    component: ContractorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractorPageRoutingModule {}
