import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingpipedgasPageRoutingModule } from './bookingpipedgas-routing.module';

import { BookingpipedgasPage } from './bookingpipedgas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingpipedgasPageRoutingModule
  ],
  declarations: [BookingpipedgasPage]
})
export class BookingpipedgasPageModule {}
