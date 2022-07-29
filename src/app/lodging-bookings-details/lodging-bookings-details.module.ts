import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LodgingBookingsDetailsPageRoutingModule } from './lodging-bookings-details-routing.module';

import { LodgingBookingsDetailsPage } from './lodging-bookings-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LodgingBookingsDetailsPageRoutingModule
  ],
  declarations: [LodgingBookingsDetailsPage]
})
export class LodgingBookingsDetailsPageModule {}
