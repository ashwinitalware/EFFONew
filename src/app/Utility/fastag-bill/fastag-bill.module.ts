import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FastagBillPageRoutingModule } from './fastag-bill-routing.module';

import { FastagBillPage } from './fastag-bill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FastagBillPageRoutingModule
  ],
  declarations: [FastagBillPage]
})
export class FastagBillPageModule {}
