import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobdashboardPage } from './jobdashboard.page';

const routes: Routes = [
  {
    path: '',
    component: JobdashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobdashboardPageRoutingModule {}
