import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoftwareDeatilsPage } from './software-deatils.page';

const routes: Routes = [
  {
    path: '',
    component: SoftwareDeatilsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoftwareDeatilsPageRoutingModule {}
