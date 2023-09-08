import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelCheckoutPageRoutingModule } from './hotel-checkout-routing.module';

import { HotelCheckoutPage } from './hotel-checkout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelCheckoutPageRoutingModule
  ],
  declarations: [HotelCheckoutPage]
})
export class HotelCheckoutPageModule {}
