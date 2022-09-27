import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransporttypePage } from './transporttype.page';

const routes: Routes = [
  {
    path: '',
    component: TransporttypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransporttypePageRoutingModule {}
