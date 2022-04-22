import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertyhomePageRoutingModule } from './propertyhome-routing.module';

import { PropertyhomePage } from './propertyhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertyhomePageRoutingModule
  ],
  declarations: [PropertyhomePage]
})
export class PropertyhomePageModule {}
