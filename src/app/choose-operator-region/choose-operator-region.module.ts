import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseOperatorRegionPageRoutingModule } from './choose-operator-region-routing.module';

import { ChooseOperatorRegionPage } from './choose-operator-region.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseOperatorRegionPageRoutingModule
  ],
  declarations: [ChooseOperatorRegionPage]
})
export class ChooseOperatorRegionPageModule {}
