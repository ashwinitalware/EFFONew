import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkfromhomeJobPage } from './workfromhome-job.page';

const routes: Routes = [
  {
    path: '',
    component: WorkfromhomeJobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkfromhomeJobPageRoutingModule {}
