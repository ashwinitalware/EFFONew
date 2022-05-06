import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddOldProductPageRoutingModule } from './add-old-product-routing.module';

import { AddOldProductPage } from './add-old-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddOldProductPageRoutingModule
  ],
  declarations: [AddOldProductPage]
})
export class AddOldProductPageModule {}
