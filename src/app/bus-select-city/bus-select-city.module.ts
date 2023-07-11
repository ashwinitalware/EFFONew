import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusSelectCityPageRoutingModule } from './bus-select-city-routing.module';

import { BusSelectCityPage } from './bus-select-city.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusSelectCityPageRoutingModule
  ],
  declarations: [BusSelectCityPage]
})
export class BusSelectCityPageModule {}
