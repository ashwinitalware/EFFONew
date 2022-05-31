import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorByCategoryPageRoutingModule } from './vendor-by-category-routing.module';

import { VendorByCategoryPage } from './vendor-by-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorByCategoryPageRoutingModule
  ],
  declarations: [VendorByCategoryPage]
})
export class VendorByCategoryPageModule {}
