import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtilityElectricityPageRoutingModule } from './utility-electricity-routing.module';

import { UtilityElectricityPage } from './utility-electricity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UtilityElectricityPageRoutingModule
  ],
  declarations: [UtilityElectricityPage]
})
export class UtilityElectricityPageModule {}
