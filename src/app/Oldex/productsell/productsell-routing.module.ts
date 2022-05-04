import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsellPage } from './productsell.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsellPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsellPageRoutingModule {}
