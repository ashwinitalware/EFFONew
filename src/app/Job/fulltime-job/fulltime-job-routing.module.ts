import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FulltimeJobPage } from './fulltime-job.page';

const routes: Routes = [
  {
    path: '',
    component: FulltimeJobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FulltimeJobPageRoutingModule {}
