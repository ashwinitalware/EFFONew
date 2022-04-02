import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertydashPage } from './propertydash.page';

const routes: Routes = [
  {
    path: '',
    component: PropertydashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertydashPageRoutingModule {}
