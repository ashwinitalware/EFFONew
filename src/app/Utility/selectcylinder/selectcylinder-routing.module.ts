import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectcylinderPage } from './selectcylinder.page';

const routes: Routes = [
  {
    path: '',
    component: SelectcylinderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectcylinderPageRoutingModule {}
