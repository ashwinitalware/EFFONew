import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabOutstationPage } from './cab-outstation.page';

const routes: Routes = [
  {
    path: '',
    component: CabOutstationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabOutstationPageRoutingModule {}
