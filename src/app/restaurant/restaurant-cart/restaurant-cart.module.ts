import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantCartPageRoutingModule } from './restaurant-cart-routing.module';

import { RestaurantCartPage } from './restaurant-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantCartPageRoutingModule
  ],
  declarations: [RestaurantCartPage]
})
export class RestaurantCartPageModule {}
