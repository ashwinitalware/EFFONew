import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertytypesPage } from './propertytypes.page';

const routes: Routes = [
  {
    path: '',
    component: PropertytypesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertytypesPageRoutingModule {}
