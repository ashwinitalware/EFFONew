import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookappointmentPage } from './bookappointment.page';

const routes: Routes = [
  {
    path: '',
    component: BookappointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookappointmentPageRoutingModule {}
