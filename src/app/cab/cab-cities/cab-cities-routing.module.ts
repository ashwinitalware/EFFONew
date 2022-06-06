import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabCitiesPage } from './cab-cities.page';

const routes: Routes = [
  {
    path: '',
    component: CabCitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabCitiesPageRoutingModule {}
