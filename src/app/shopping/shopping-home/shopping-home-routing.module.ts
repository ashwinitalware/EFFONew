import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingHomePage } from './shopping-home.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingHomePageRoutingModule {}
