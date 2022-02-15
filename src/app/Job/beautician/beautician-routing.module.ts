import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeauticianPage } from './beautician.page';

const routes: Routes = [
  {
    path: '',
    component: BeauticianPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeauticianPageRoutingModule {}
