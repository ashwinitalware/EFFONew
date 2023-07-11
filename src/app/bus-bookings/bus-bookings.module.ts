import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusBookingsPageRoutingModule } from './bus-bookings-routing.module';

import { BusBookingsPage } from './bus-bookings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusBookingsPageRoutingModule
  ],
  declarations: [BusBookingsPage]
})
export class BusBookingsPageModule {}
