import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorListingPageRoutingModule } from './vendor-listing-routing.module';

import { VendorListingPage } from './vendor-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorListingPageRoutingModule
  ],
  declarations: [VendorListingPage]
})
export class VendorListingPageModule {}
