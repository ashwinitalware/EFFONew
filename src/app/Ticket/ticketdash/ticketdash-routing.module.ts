import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketdashPage } from './ticketdash.page';

const routes: Routes = [
  {
    path: '',
    component: TicketdashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketdashPageRoutingModule {}
