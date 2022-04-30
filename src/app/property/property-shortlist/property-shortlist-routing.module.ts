import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyShortlistPage } from './property-shortlist.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyShortlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyShortlistPageRoutingModule {}
