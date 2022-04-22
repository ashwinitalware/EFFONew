import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterpropertyPage } from './filterproperty.page';

const routes: Routes = [
  {
    path: '',
    component: FilterpropertyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterpropertyPageRoutingModule {}
