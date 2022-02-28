import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeservicesPage } from './homeservices.page';

const routes: Routes = [
  {
    path: '',
    component: HomeservicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeservicesPageRoutingModule {}
