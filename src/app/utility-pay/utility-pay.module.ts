import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtilityPayPageRoutingModule } from './utility-pay-routing.module';

import { UtilityPayPage } from './utility-pay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UtilityPayPageRoutingModule
  ],
  declarations: [UtilityPayPage]
})
export class UtilityPayPageModule {}
