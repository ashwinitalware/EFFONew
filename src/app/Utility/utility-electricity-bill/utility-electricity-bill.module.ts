import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtilityElectricityBillPageRoutingModule } from './utility-electricity-bill-routing.module';

import { UtilityElectricityBillPage } from './utility-electricity-bill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UtilityElectricityBillPageRoutingModule
  ],
  declarations: [UtilityElectricityBillPage]
})
export class UtilityElectricityBillPageModule {}
