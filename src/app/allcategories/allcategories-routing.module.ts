import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllcategoriesPage } from './allcategories.page';

const routes: Routes = [
  {
    path: '',
    component: AllcategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllcategoriesPageRoutingModule {}
