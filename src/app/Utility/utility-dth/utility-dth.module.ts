import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtilityDTHPageRoutingModule } from './utility-dth-routing.module';

import { UtilityDTHPage } from './utility-dth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UtilityDTHPageRoutingModule
  ],
  declarations: [UtilityDTHPage]
})
export class UtilityDTHPageModule {}
