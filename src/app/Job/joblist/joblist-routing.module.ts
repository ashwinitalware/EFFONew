import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoblistPage } from './joblist.page';

const routes: Routes = [
  {
    path: '',
    component: JoblistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoblistPageRoutingModule {}
