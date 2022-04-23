import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingVendorMenuPageRoutingModule } from './shopping-vendor-menu-routing.module';

import { ShoppingVendorMenuPage } from './shopping-vendor-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingVendorMenuPageRoutingModule
  ],
  declarations: [ShoppingVendorMenuPage]
})
export class ShoppingVendorMenuPageModule {}
