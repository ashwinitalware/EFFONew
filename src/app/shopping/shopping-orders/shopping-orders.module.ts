import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingOrdersPageRoutingModule } from './shopping-orders-routing.module';

import { ShoppingOrdersPage } from './shopping-orders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingOrdersPageRoutingModule
  ],
  declarations: [ShoppingOrdersPage]
})
export class ShoppingOrdersPageModule {}
