import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RidestatusPageRoutingModule } from './ridestatus-routing.module';

import { RidestatusPage } from './ridestatus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RidestatusPageRoutingModule
  ],
  declarations: [RidestatusPage]
})
export class RidestatusPageModule {}
