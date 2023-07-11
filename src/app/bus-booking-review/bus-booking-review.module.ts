import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusBookingReviewPageRoutingModule } from './bus-booking-review-routing.module';

import { BusBookingReviewPage } from './bus-booking-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusBookingReviewPageRoutingModule
  ],
  declarations: [BusBookingReviewPage]
})
export class BusBookingReviewPageModule {}
