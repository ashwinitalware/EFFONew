import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutohistoryPage } from './autohistory.page';

const routes: Routes = [
  {
    path: '',
    component: AutohistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutohistoryPageRoutingModule {}
