import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingVendorListingPageRoutingModule } from './shopping-vendor-listing-routing.module';

import { ShoppingVendorListingPage } from './shopping-vendor-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingVendorListingPageRoutingModule
  ],
  declarations: [ShoppingVendorListingPage]
})
export class ShoppingVendorListingPageModule {}
