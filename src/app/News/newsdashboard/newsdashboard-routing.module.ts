import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsdashboardPage } from './newsdashboard.page';

const routes: Routes = [
  {
    path: '',
    component: NewsdashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsdashboardPageRoutingModule {}
