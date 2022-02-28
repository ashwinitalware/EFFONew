import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FashionPage } from './fashion.page';

const routes: Routes = [
  {
    path: '',
    component: FashionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FashionPageRoutingModule {}
