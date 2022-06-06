import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CabConfirmBookingPageRoutingModule } from './cab-confirm-booking-routing.module';

import { CabConfirmBookingPage } from './cab-confirm-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CabConfirmBookingPageRoutingModule
  ],
  declarations: [CabConfirmBookingPage]
})
export class CabConfirmBookingPageModule {}
