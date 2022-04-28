import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmpickupPage } from './confirmpickup.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmpickupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmpickupPageRoutingModule {}
