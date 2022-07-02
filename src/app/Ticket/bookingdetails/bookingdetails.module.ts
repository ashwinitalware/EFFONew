import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingdetailsPageRoutingModule } from './bookingdetails-routing.module';

import { BookingdetailsPage } from './bookingdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingdetailsPageRoutingModule
  ],
  declarations: [BookingdetailsPage]
})
export class BookingdetailsPageModule {}
