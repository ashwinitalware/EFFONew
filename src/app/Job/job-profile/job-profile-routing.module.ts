import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobProfilePage } from './job-profile.page';

const routes: Routes = [
  {
    path: '',
    component: JobProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobProfilePageRoutingModule {}
