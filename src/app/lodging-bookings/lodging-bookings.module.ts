import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LodgingBookingsPageRoutingModule } from './lodging-bookings-routing.module';

import { LodgingBookingsPage } from './lodging-bookings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LodgingBookingsPageRoutingModule
  ],
  declarations: [LodgingBookingsPage]
})
export class LodgingBookingsPageModule {}
