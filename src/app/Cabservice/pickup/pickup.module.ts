import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickupPageRoutingModule } from './pickup-routing.module';

import { PickupPage } from './pickup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickupPageRoutingModule
  ],
  declarations: [PickupPage]
})
export class PickupPageModule {}
