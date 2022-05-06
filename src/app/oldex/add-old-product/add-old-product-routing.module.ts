import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AddOldProductPage } from './add-old-product.page';

const routes: Routes = [
  {
    path: '',
    component: AddOldProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),FormsModule],
  exports: [RouterModule],
})
export class AddOldProductPageRoutingModule {}
