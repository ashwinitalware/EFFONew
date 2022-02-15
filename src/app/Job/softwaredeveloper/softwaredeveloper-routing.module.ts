import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoftwaredeveloperPage } from './softwaredeveloper.page';

const routes: Routes = [
  {
    path: '',
    component: SoftwaredeveloperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoftwaredeveloperPageRoutingModule {}
