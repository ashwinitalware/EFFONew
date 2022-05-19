import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LodgingeditprofilePageRoutingModule } from './lodgingeditprofile-routing.module';

import { LodgingeditprofilePage } from './lodgingeditprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LodgingeditprofilePageRoutingModule
  ],
  declarations: [LodgingeditprofilePage]
})
export class LodgingeditprofilePageModule {}
