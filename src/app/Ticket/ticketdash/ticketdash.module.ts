import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketdashPageRoutingModule } from './ticketdash-routing.module';

import { TicketdashPage } from './ticketdash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketdashPageRoutingModule
  ],
  declarations: [TicketdashPage]
})
export class TicketdashPageModule {}
