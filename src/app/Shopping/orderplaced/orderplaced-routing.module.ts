import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderplacedPage } from './orderplaced.page';

const routes: Routes = [
  {
    path: '',
    component: OrderplacedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderplacedPageRoutingModule {}
