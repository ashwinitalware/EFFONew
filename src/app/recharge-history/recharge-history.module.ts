import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechargeHistoryPageRoutingModule } from './recharge-history-routing.module';

import { RechargeHistoryPage } from './recharge-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechargeHistoryPageRoutingModule
  ],
  declarations: [RechargeHistoryPage]
})
export class RechargeHistoryPageModule {}
