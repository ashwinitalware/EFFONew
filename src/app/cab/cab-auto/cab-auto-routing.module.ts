import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabAutoPage } from './cab-auto.page';

const routes: Routes = [
  {
    path: '',
    component: CabAutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabAutoPageRoutingModule {}
