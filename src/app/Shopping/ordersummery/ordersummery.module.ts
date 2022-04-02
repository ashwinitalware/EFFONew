import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdersummeryPageRoutingModule } from './ordersummery-routing.module';

import { OrdersummeryPage } from './ordersummery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersummeryPageRoutingModule
  ],
  declarations: [OrdersummeryPage]
})
export class OrdersummeryPageModule {}
