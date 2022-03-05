import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeautyPage } from './beauty.page';

const routes: Routes = [
  {
    path: '',
    component: BeautyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeautyPageRoutingModule {}
