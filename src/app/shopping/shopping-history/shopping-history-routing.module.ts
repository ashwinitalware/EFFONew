import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingHistoryPage } from './shopping-history.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingHistoryPageRoutingModule {}
