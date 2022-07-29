import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LodgingHomePageRoutingModule } from './lodging-home-routing.module';

import { LodgingHomePage } from './lodging-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LodgingHomePageRoutingModule
  ],
  declarations: [LodgingHomePage]
})
export class LodgingHomePageModule {}
