import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopingAddCartModalPageRoutingModule } from './shoping-add-cart-modal-routing.module';

import { ShopingAddCartModalPage } from './shoping-add-cart-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopingAddCartModalPageRoutingModule
  ],
  declarations: [ShopingAddCartModalPage]
})
export class ShopingAddCartModalPageModule {}
