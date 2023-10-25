import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CabOutBookingPageRoutingModule } from './cab-out-booking-routing.module';

import { CabOutBookingPage } from './cab-out-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CabOutBookingPageRoutingModule
  ],
  declarations: [CabOutBookingPage]
})
export class CabOutBookingPageModule {}
