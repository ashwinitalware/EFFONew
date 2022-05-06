import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabhistoryPage } from './cabhistory.page';

const routes: Routes = [
  {
    path: '',
    component: CabhistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabhistoryPageRoutingModule {}
