import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectcityPage } from './selectcity.page';

const routes: Routes = [
  {
    path: '',
    component: SelectcityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectcityPageRoutingModule {}
