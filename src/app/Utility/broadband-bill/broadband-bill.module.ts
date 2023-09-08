import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BroadbandBillPageRoutingModule } from './broadband-bill-routing.module';

import { BroadbandBillPage } from './broadband-bill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BroadbandBillPageRoutingModule
  ],
  declarations: [BroadbandBillPage]
})
export class BroadbandBillPageModule {}
