import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CabAllVehiclePageRoutingModule } from './cab-all-vehicle-routing.module';

import { CabAllVehiclePage } from './cab-all-vehicle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CabAllVehiclePageRoutingModule
  ],
  declarations: [CabAllVehiclePage]
})
export class CabAllVehiclePageModule {}
