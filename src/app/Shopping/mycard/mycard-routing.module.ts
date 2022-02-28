import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycardPage } from './mycard.page';

const routes: Routes = [
  {
    path: '',
    component: MycardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycardPageRoutingModule {}
