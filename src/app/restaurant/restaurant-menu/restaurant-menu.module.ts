import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantMenuPageRoutingModule } from './restaurant-menu-routing.module';

import { RestaurantMenuPage } from './restaurant-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantMenuPageRoutingModule
  ],
  declarations: [RestaurantMenuPage]
})
export class RestaurantMenuPageModule {}
