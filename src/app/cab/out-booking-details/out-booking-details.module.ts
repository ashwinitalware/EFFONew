import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutBookingDetailsPageRoutingModule } from './out-booking-details-routing.module';

import { OutBookingDetailsPage } from './out-booking-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutBookingDetailsPageRoutingModule
  ],
  declarations: [OutBookingDetailsPage]
})
export class OutBookingDetailsPageModule {}
