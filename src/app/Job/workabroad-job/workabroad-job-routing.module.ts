import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkabroadJobPage } from './workabroad-job.page';

const routes: Routes = [
  {
    path: '',
    component: WorkabroadJobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkabroadJobPageRoutingModule {}
