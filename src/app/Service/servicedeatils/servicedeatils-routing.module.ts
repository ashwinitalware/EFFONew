import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicedeatilsPage } from './servicedeatils.page';

const routes: Routes = [
  {
    path: '',
    component: ServicedeatilsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicedeatilsPageRoutingModule {}
