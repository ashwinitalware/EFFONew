import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomecleaningPage } from './homecleaning.page';

const routes: Routes = [
  {
    path: '',
    component: HomecleaningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomecleaningPageRoutingModule {}
