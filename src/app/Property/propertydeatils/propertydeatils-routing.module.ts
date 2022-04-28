import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertydeatilsPage } from './propertydeatils.page';

const routes: Routes = [
  {
    path: '',
    component: PropertydeatilsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertydeatilsPageRoutingModule {}
