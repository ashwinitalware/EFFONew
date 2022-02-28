import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcservicePage } from './acservice.page';

const routes: Routes = [
  {
    path: '',
    component: AcservicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcservicePageRoutingModule {}
