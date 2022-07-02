import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectpipedgasPage } from './selectpipedgas.page';

const routes: Routes = [
  {
    path: '',
    component: SelectpipedgasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectpipedgasPageRoutingModule {}
