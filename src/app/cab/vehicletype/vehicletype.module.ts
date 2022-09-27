import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicletypePageRoutingModule } from './vehicletype-routing.module';

import { VehicletypePage } from './vehicletype.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicletypePageRoutingModule
  ],
  declarations: [VehicletypePage]
})
export class VehicletypePageModule {}
