import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodhistroyPage } from './foodhistroy.page';

const routes: Routes = [
  {
    path: '',
    component: FoodhistroyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodhistroyPageRoutingModule {}
