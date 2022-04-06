import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobHomePage } from './job-home.page';

const routes: Routes = [
  {
    path: '',
    component: JobHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobHomePageRoutingModule {}
