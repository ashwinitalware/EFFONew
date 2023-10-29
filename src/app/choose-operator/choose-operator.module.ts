import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseOperatorPageRoutingModule } from './choose-operator-routing.module';

import { ChooseOperatorPage } from './choose-operator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseOperatorPageRoutingModule
  ],
  declarations: [ChooseOperatorPage]
})
export class ChooseOperatorPageModule {}
