import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackofficePage } from './backoffice.page';

const routes: Routes = [
  {
    path: '',
    component: BackofficePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackofficePageRoutingModule {}
