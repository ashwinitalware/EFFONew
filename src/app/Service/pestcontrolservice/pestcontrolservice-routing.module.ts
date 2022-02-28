import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PestcontrolservicePage } from './pestcontrolservice.page';

const routes: Routes = [
  {
    path: '',
    component: PestcontrolservicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PestcontrolservicePageRoutingModule {}
