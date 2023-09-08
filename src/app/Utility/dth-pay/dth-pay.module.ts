import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DthPayPageRoutingModule } from './dth-pay-routing.module';

import { DthPayPage } from './dth-pay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DthPayPageRoutingModule
  ],
  declarations: [DthPayPage]
})
export class DthPayPageModule {}
