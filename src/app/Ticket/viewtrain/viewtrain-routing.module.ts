import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewtrainPage } from './viewtrain.page';

const routes: Routes = [
  {
    path: '',
    component: ViewtrainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewtrainPageRoutingModule {}
