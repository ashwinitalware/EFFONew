import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LodgingshortlistedPageRoutingModule } from './lodgingshortlisted-routing.module';

import { LodgingshortlistedPage } from './lodgingshortlisted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LodgingshortlistedPageRoutingModule
  ],
  declarations: [LodgingshortlistedPage]
})
export class LodgingshortlistedPageModule {}
