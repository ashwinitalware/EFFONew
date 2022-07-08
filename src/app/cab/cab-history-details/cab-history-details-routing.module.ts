import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabHistoryDetailsPage } from './cab-history-details.page';

const routes: Routes = [
  {
    path: '',
    component: CabHistoryDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabHistoryDetailsPageRoutingModule {}
