import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LodgingDetailsPageRoutingModule } from './lodging-details-routing.module';

import { LodgingDetailsPage } from './lodging-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LodgingDetailsPageRoutingModule
  ],
  declarations: [LodgingDetailsPage]
})
export class LodgingDetailsPageModule {}
