import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingOrderDetailsPageRoutingModule } from './shopping-order-details-routing.module';

import { ShoppingOrderDetailsPage } from './shopping-order-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingOrderDetailsPageRoutingModule
  ],
  declarations: [ShoppingOrderDetailsPage]
})
export class ShoppingOrderDetailsPageModule {}
