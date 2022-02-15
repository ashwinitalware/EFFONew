import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlljoblistPage } from './alljoblist.page';

const routes: Routes = [
  {
    path: '',
    component: AlljoblistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlljoblistPageRoutingModule {}
