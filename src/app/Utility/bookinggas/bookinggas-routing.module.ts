import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookinggasPage } from './bookinggas.page';

const routes: Routes = [
  {
    path: '',
    component: BookinggasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookinggasPageRoutingModule {}
