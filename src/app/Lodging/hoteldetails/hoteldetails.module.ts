import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoteldetailsPageRoutingModule } from './hoteldetails-routing.module';

import { HoteldetailsPage } from './hoteldetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoteldetailsPageRoutingModule
  ],
  declarations: [HoteldetailsPage]
})
export class HoteldetailsPageModule {}
