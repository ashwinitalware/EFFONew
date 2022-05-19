import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LodgingshortlistedPage } from './lodgingshortlisted.page';

const routes: Routes = [
  {
    path: '',
    component: LodgingshortlistedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LodgingshortlistedPageRoutingModule {}
