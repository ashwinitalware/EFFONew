import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddfavoritePage } from './addfavorite.page';

const routes: Routes = [
  {
    path: '',
    component: AddfavoritePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddfavoritePageRoutingModule {}
