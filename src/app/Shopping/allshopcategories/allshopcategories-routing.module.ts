import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllshopcategoriesPage } from './allshopcategories.page';

const routes: Routes = [
  {
    path: '',
    component: AllshopcategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllshopcategoriesPageRoutingModule {}
