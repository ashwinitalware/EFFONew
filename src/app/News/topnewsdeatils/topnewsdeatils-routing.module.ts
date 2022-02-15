import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopnewsdeatilsPage } from './topnewsdeatils.page';

const routes: Routes = [
  {
    path: '',
    component: TopnewsdeatilsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopnewsdeatilsPageRoutingModule {}
