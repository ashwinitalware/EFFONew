import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantOrderDetailsPageRoutingModule } from './restaurant-order-details-routing.module';

import { RestaurantOrderDetailsPage } from './restaurant-order-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantOrderDetailsPageRoutingModule
  ],
  declarations: [RestaurantOrderDetailsPage]
})
export class RestaurantOrderDetailsPageModule {}
