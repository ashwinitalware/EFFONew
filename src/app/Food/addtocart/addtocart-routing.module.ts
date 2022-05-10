import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddtocartPage } from './addtocart.page';

const routes: Routes = [
  {
    path: '',
    component: AddtocartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddtocartPageRoutingModule {}
