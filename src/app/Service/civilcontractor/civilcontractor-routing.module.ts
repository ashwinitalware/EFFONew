import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CivilcontractorPage } from './civilcontractor.page';

const routes: Routes = [
  {
    path: '',
    component: CivilcontractorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CivilcontractorPageRoutingModule {}
