import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmationpopupPage } from './confirmationpopup.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmationpopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmationpopupPageRoutingModule {}
