import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabHomePage } from './cab-home.page';

const routes: Routes = [
  {
    path: '',
    component: CabHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabHomePageRoutingModule {}
