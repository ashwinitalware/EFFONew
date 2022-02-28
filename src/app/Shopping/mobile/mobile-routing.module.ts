import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobilePage } from './mobile.page';

const routes: Routes = [
  {
    path: '',
    component: MobilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobilePageRoutingModule {}
