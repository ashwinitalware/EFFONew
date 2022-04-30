import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyHomePage } from './property-home.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyHomePageRoutingModule {}
