import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertyHomePageRoutingModule } from './property-home-routing.module';

import { PropertyHomePage } from './property-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertyHomePageRoutingModule
  ],
  declarations: [PropertyHomePage]
})
export class PropertyHomePageModule {}
