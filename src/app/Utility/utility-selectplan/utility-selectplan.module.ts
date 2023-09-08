import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtilitySelectplanPageRoutingModule } from './utility-selectplan-routing.module';

import { UtilitySelectplanPage } from './utility-selectplan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UtilitySelectplanPageRoutingModule
  ],
  declarations: [UtilitySelectplanPage]
})
export class UtilitySelectplanPageModule {}
