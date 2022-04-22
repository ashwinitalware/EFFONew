import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyhomePage } from './propertyhome.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyhomePageRoutingModule {}
