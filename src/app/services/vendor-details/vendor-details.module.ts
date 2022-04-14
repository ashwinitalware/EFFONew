import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorDetailsPageRoutingModule } from './vendor-details-routing.module';

import { VendorDetailsPage } from './vendor-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorDetailsPageRoutingModule
  ],
  declarations: [VendorDetailsPage]
})
export class VendorDetailsPageModule {}
