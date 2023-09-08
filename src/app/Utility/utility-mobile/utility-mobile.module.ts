import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtilityMobilePageRoutingModule } from './utility-mobile-routing.module';

import { UtilityMobilePage } from './utility-mobile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UtilityMobilePageRoutingModule
  ],
  declarations: [UtilityMobilePage]
})
export class UtilityMobilePageModule {}
