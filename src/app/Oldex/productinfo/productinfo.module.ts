import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductinfoPageRoutingModule } from './productinfo-routing.module';

import { ProductinfoPage } from './productinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductinfoPageRoutingModule
  ],
  declarations: [ProductinfoPage]
})
export class ProductinfoPageModule {}
