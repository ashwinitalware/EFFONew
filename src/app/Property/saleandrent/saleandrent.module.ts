import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaleandrentPageRoutingModule } from './saleandrent-routing.module';

import { SaleandrentPage } from './saleandrent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaleandrentPageRoutingModule
  ],
  declarations: [SaleandrentPage]
})
export class SaleandrentPageModule {}
