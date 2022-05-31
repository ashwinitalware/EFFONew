import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopingAddCartModalPage } from './shoping-add-cart-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ShopingAddCartModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopingAddCartModalPageRoutingModule {}
