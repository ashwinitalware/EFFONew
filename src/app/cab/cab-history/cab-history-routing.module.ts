import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabHistoryPage } from './cab-history.page';

const routes: Routes = [
  {
    path: '',
    component: CabHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabHistoryPageRoutingModule {}
