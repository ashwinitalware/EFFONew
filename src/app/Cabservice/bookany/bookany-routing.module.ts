import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookanyPage } from './bookany.page';

const routes: Routes = [
  {
    path: '',
    component: BookanyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookanyPageRoutingModule {}
