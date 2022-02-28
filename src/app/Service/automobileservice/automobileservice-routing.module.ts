import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutomobileservicePage } from './automobileservice.page';

const routes: Routes = [
  {
    path: '',
    component: AutomobileservicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutomobileservicePageRoutingModule {}
