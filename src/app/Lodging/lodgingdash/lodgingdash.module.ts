import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LodgingdashPageRoutingModule } from './lodgingdash-routing.module';

import { LodgingdashPage } from './lodgingdash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LodgingdashPageRoutingModule
  ],
  declarations: [LodgingdashPage]
})
export class LodgingdashPageModule {}
