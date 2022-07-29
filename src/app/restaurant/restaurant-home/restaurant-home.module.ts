import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantHomePageRoutingModule } from './restaurant-home-routing.module';

import { RestaurantHomePage } from './restaurant-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantHomePageRoutingModule
  ],
  declarations: [RestaurantHomePage]
})
export class RestaurantHomePageModule {}
