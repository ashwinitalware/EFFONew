import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransporthomePage } from './transporthome.page';

const routes: Routes = [
  {
    path: '',
    component: TransporthomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransporthomePageRoutingModule {}
