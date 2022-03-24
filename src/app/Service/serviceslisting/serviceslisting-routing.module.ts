import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceslistingPage } from './serviceslisting.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceslistingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceslistingPageRoutingModule {}
