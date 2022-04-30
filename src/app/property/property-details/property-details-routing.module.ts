import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyDetailsPage } from './property-details.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyDetailsPageRoutingModule {}
