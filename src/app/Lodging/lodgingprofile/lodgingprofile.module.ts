import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LodgingprofilePageRoutingModule } from './lodgingprofile-routing.module';

import { LodgingprofilePage } from './lodgingprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LodgingprofilePageRoutingModule
  ],
  declarations: [LodgingprofilePage]
})
export class LodgingprofilePageModule {}
