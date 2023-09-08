import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusCheckoutPageRoutingModule } from './bus-checkout-routing.module';

import { BusCheckoutPage } from './bus-checkout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusCheckoutPageRoutingModule
  ],
  declarations: [BusCheckoutPage]
})
export class BusCheckoutPageModule {}
