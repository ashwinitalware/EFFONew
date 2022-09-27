import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutohomePage } from './autohome.page';

const routes: Routes = [
  {
    path: '',
    component: AutohomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutohomePageRoutingModule {}
