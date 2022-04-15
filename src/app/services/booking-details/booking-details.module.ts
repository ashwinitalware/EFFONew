import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingDetailsPageRoutingModule } from './booking-details-routing.module';

import { BookingDetailsPage } from './booking-details.page';
import { NgxStarRatingModule } from 'ngx-star-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxStarRatingModule,
    IonicModule,
    BookingDetailsPageRoutingModule,
  ],
  declarations: [BookingDetailsPage],
})
export class BookingDetailsPageModule {}
