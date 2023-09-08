import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DthOperatorPageRoutingModule } from './dth-operator-routing.module';

import { DthOperatorPage } from './dth-operator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DthOperatorPageRoutingModule
  ],
  declarations: [DthOperatorPage]
})
export class DthOperatorPageModule {}
