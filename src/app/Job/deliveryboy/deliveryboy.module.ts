import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryboyPageRoutingModule } from './deliveryboy-routing.module';

import { DeliveryboyPage } from './deliveryboy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryboyPageRoutingModule
  ],
  declarations: [DeliveryboyPage]
})
export class DeliveryboyPageModule {}
