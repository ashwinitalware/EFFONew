import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParttimeJobPage } from './parttime-job.page';

const routes: Routes = [
  {
    path: '',
    component: ParttimeJobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParttimeJobPageRoutingModule {}
