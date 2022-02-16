import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotpassPage } from './forgotpass.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotpassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotpassPageRoutingModule {}
