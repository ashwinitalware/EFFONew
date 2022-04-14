import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceSubcategoriesPage } from './service-subcategories.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceSubcategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceSubcategoriesPageRoutingModule {}
