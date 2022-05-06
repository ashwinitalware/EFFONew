import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OldexHomePage } from './oldex-home.page';

const routes: Routes = [
  {
    path: '',
    component: OldexHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OldexHomePageRoutingModule {}
